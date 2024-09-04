<?php

namespace App\Filament\Widgets;

use App\Models\Industry;
use Filament\Widgets\ChartWidget;

class IndustryChart extends ChartWidget
{
    public function getHeading(): string
    {
        return 'Top 10 Industries by Vacancy';
    }

    protected function getData(): array
    {
        $industries = Industry::withCount('vacancy')
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
                    'data' => $industries->pluck('vacancy_count')->toArray(),
                    'backgroundColor' => $colors, // Apply the psychological colors
                ],
            ],
            'labels' => $industries->pluck('name')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
