<?php

namespace App\Filament\Resources\ApplicantsResource\Pages;

use App\Filament\Resources\ApplicantsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditApplicants extends EditRecord
{
    protected static string $resource = ApplicantsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
