<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AlumniResource\Pages;
use App\Filament\Resources\AlumniResource\RelationManagers;
use App\Models\Alumni;
use App\Models\Gender;
use App\Models\Vocation;
use App\Models\GraduationYear;
use App\Models\Status;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AlumniResource extends Resource
{
    public static ?string $pluralModelLabel = 'Alumni';
    protected static ?string $navigationGroup = 'User Management';
    protected static ?string $model = Alumni::class;

    // protected static ?string $navigationIcon = 'heroicon-o-academic-cap';
    protected static ?string $navigationLabel = 'Alumni';
    protected static ?string $title = 'Alumni';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Nama')
                    ->required()
                    ->placeholder('Masukkan nama alumni')
                    ->maxLength(255),

                DatePicker::make('birthdate')
                    ->label('Tanggal Lahir')
                    ->required()
                    ->placeholder('Pilih tanggal lahir'),

                Select::make('gender_id')
                    ->label('Jenis Kelamin')
                    ->required()
                    ->relationship('gender', 'gender_name')
                    ->placeholder('Pilih jenis kelamin')
                    ->options(Gender::all()->pluck('gender_name', 'id')),

                Textarea::make('address')
                    ->label('Alamat')
                    ->placeholder('Masukkan alamat lengkap')
                    ->rows(3)
                    ->maxLength(255),

                TextInput::make('phone')
                    ->label('Nomor Telepon')
                    ->required()
                    ->placeholder('Masukkan nomor telepon')
                    ->maxLength(15),

                TextInput::make('email')
                    ->label('Alamat Email')
                    ->required()
                    ->email()
                    ->placeholder('Masukkan email alumni'),

                Select::make('vocation_id')
                    ->label('Jurusan')
                    ->relationship('vocation', 'vocation_name')
                    ->required()
                    ->placeholder('Pilih jurusan')
                    ->options(Vocation::all()->pluck('vocation_name', 'id')),

                Select::make('graduation_year_id')
                    ->label('Tahun Kelulusan')
                    ->relationship('graduationYear', 'year')
                    ->required()
                    ->placeholder('Pilih tahun kelulusan')
                    ->options(GraduationYear::all()->pluck('year', 'id')),

                Select::make('status_id')
                    ->label('Status')
                    ->relationship('status', 'status_name')
                    ->required()
                    ->placeholder('Pilih status alumni')
                    ->options(Status::all()->pluck('status_name', 'id')),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nama')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('birthdate')
                    ->label('Tanggal Lahir')
                    ->sortable(),
                TextColumn::make('gender.gender_name')
                    ->label('Jenis Kelamin')
                    ->sortable(),

                TextColumn::make('address')
                    ->label('Alamat')
                    ->sortable(),

                TextColumn::make('phone')
                    ->label('Nomor Telepon')
                    ->sortable(),

                TextColumn::make('email')
                    ->label('Alamat Email')
                    ->sortable(),

                TextColumn::make('vocation.vocation_name')
                    ->label('Jurusan')
                    ->sortable(),

                TextColumn::make('graduationyear.year')
                    ->label('Tahun Kelulusan')
                    ->sortable(),
                TextColumn::make('status.status_name')
                    ->label('Status')
                    ->sortable(),

            ])
            ->defaultSort('graduationyear.year', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAlumnis::route('/'),
            'create' => Pages\CreateAlumni::route('/create'),
            'edit' => Pages\EditAlumni::route('/{record}/edit'),
        ];
    }
}
