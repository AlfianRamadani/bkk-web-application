<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicantsResource\Pages;
use App\Filament\Resources\ApplicantsResource\RelationManagers;
use App\Models\Applicants;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ApplicantsResource extends Resource
{
    protected static ?string $model = Applicants::class;
    protected static ?string $navigationGroup = 'User Management';
    public static ?string $pluralModelLabel = 'Pelamar';
    


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
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
            'index' => Pages\ListApplicants::route('/'),
            'create' => Pages\CreateApplicants::route('/create'),
            'edit' => Pages\EditApplicants::route('/{record}/edit'),
        ];
    }
}
