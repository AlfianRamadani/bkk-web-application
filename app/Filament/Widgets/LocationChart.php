<?php

namespace App\Filament\Widgets;

use App\Models\Location;
use Filament\Widgets\ChartWidget;

class LocationChart extends ChartWidget
{
    protected static ?string $heading = 'Top 10 Locations by Vacancy';

    public function getHeading(): string
    {
        return static::$heading;
    }
    protected function getData(): array
    {
        $locations = Location::withCount('vacancy')
            ->orderBy('vacancy_count', 'desc')
            ->take(10)
            ->get();

        $colors = [
            '#FF6384', // Red: Excitement, passion
            '#36A2EB', // Blue: Trust, dependability
            '#FFCE56', // Yellow: Optimism, clarity
            '#4BC0C0', // Green: Growth, calmness
            '#9966FF', // Purple: Creativity, imagination
            '#FF9F40', // Orange: Enthusiasm, success
            '#FFD700', // Gold: Achievement, wealth
            '#008080', // Teal: Balance, sophistication
            '#C71585', // Deep Pink: Playfulness, energy
            '#8B4513', // Brown: Stability, comfort
        ];

        return [
            'datasets' => [
                [
                    'label' => 'Industry',
                    'data' => $locations->pluck('vacancy_count')->toArray(),
                    'backgroundColor' => $colors,
                ],
            ],
            'labels' => $locations->pluck('location_name')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
