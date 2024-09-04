<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VacancyResource\Pages;
use App\Models\Company;
use App\Models\Industry;
use App\Models\Location;
use App\Models\JobType;
use App\Models\Experience;
use App\Models\SalaryRange;
use App\Models\Vacancy;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
class VacancyResource extends Resource
{
    protected static ?string $model = Vacancy::class;

    // protected static ?string $navigationIcon = 'heroicon-o-wrench-screwdriver';
    protected static ?string $navigationLabel = 'Lowongan';
    protected static ?string $navigationGroup = 'Job Management';
    public static ?string $pluralModelLabel = 'Lowongan';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Judul Lowongan')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Masukkan judul lowongan'),

                Textarea::make('description')
                    ->label('Deskripsi Lowongan')
                    ->required()
                    ->rows(5)
                    ->placeholder('Masukkan deskripsi pekerjaan'),

                Select::make('company_id')
                    ->label('Perusahaan')
                    ->relationship('company', 'company_name')
                    ->required()
                    ->placeholder('Pilih perusahaan')
                    ->options(Company::all()->pluck('company_name', 'id'))
                    ->createOptionForm([
                        Forms\Components\TextInput::make('company_name')->label('Nama Perusahaan')->required(),
                        Forms\Components\TextInput::make('address')->label('Alamat Perusahaan')->required(),
                        Forms\Components\TextInput::make('contact')->label('Kontak Perusahaan')->required(),
                        Forms\Components\TextInput::make('email')->label('Email Perusahaan')->required(),
                        Forms\Components\FileUpload::make('company_logo')->label('Logo Perusahaan')->disk('public')->directory('company_logo')->required(),
                        Forms\Components\FileUpload::make('header')->label('Header Perusahaan')->disk('public')->directory('company_header')->required(),
                    ]),


                Select::make('location_id')
                    ->label('Lokasi')
                    ->relationship('location', 'location_name')
                    ->required()
                    ->placeholder('Pilih lokasi pekerjaan')
                    ->options(Location::all()->pluck('location_name', 'id'))
                    ->createOptionForm([
                        TextInput::make('location_name')->label('Nama Lokasi')->required(),
                    ]),

                Select::make('type_id')
                    ->label('Jenis Pekerjaan')
                    ->relationship('jobType', 'job_type_name')
                    ->required()
                    ->placeholder('Pilih jenis pekerjaan')
                    ->options(JobType::all()->pluck('job_type_name', 'id')),

                Select::make('experience_id')
                    ->label('Pengalaman')
                    ->relationship('experience', 'experience_name')
                    ->required()
                    ->placeholder('Pilih pengalaman kerja yang dibutuhkan')
                    ->options(Experience::all()->pluck('experience_name', 'id')),


                    Select::make('industry_id')
                        ->label('Industri')
                        ->relationship('industry', 'name')
                        ->required()
                        ->placeholder('Pilih industri yang sesuai dengan lowongan')
                        ->options(Industry::all()->pluck('name', 'id')),

                    Select::make('salary_id')
                    ->label('Gaji')
                    ->relationship('salaryRange', 'range')
                    ->required()
                    ->placeholder('Pilih rentang gaji yang ditawarkan')
                    ->options(
                        SalaryRange::all()->pluck('range', 'id')->map(function ($range, $id) {
                            return "Rp " . number_format($range, 0, ',', '.') . " "; // Format the salary range and display ID
                        })
                    ),


                DatePicker::make('close_at')
                    ->label('Tutup Pada')
                    ->minDate(now())
                    ->required()
                    ->placeholder('Pilih tanggal penutupan lowongan'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                ->sortable(),
                TextColumn::make('title')
                    ->label('Judul'),
                TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(50),
                TextColumn::make('company.company_name')
                    ->label('Perusahaan'),
                TextColumn::make('location.location_name')
                    ->label('Lokasi')
                    ->searchable(),
                TextColumn::make('jobType.job_type_name')
                    ->label('Jenis Pekerjaan')
                    ->sortable(),
                TextColumn::make('experience.experience_name')
                    ->label('Pengalaman')
                    ->sortable(),
                TextColumn::make('salaryRange.range')
                    ->label('Gaji')
                    ->money('idr')
                    ->sortable(),
                TextColumn::make('close_at')
                    ->label('Tutup Pada')
                    ->date()
                    ->sortable(),
            ])
            ->filters([


                SelectFilter::make('Lowongan')
                ->options([
                    '>' => 'Di tutup',
                    '<' => 'Di buka',
                ])
                ->attribute('close_at')
                ->query(
                    fn (array $data, Builder $query): Builder =>
                    $query->when(
                        $data['value'],
                        fn (Builder $query, $value): Builder =>
                        $query->where(
                            'close_at',
                            $value === '>' ? '<' : '>',
                            now()
                        )
                    )
                )
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
            'index' => Pages\ListVacancies::route('/'),
            'create' => Pages\CreateVacancy::route('/create'),
            'edit' => Pages\EditVacancy::route('/{record}/edit'),
        ];
    }
}
