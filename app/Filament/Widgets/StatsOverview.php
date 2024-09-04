<?php

namespace App\Filament\Widgets;

use App\Models\Company;
use App\Models\Industry;
use App\Models\Location;
use App\Models\Vacancy;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Vacancies', Vacancy::count()),
            Stat::make('Companies', Company::count()),
            Stat::make('Industries', Industry::count()),
            Stat::make('Locations', Location::count()),
            


        ];
    }
}
