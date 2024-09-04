<?php
namespace App\Filament\Widgets;

use Carbon\Carbon;
use App\Models\Vacancy;
use Filament\Widgets\LineChartWidget;

class VacancyBasedCreatedChart extends LineChartWidget
{
    protected static ?string $heading = 'Vacancy Published Per Week';

    // Method untuk menambahkan filter bulan


    protected function getFilters(): ?array
    {
        return [

            '1' => 'January',
            '2' => 'February',
            '3' => 'March',
            '4' => 'April',
            '5' => 'May',
            '6' => 'June',
            '7' => 'July',
            '8' => 'August',
            '9' => 'September',
            '10' => 'October',
            '11' => 'November',
            '12' => 'December',
            'default' => '8',
        ];
    }

    protected function getData(): array
    {
        $selectedMonth = $this->filter == '0' ? Carbon::now()->format('n') : $this->filter;

        $startOfMonth = Carbon::create(Carbon::now()->year, $selectedMonth, 1)->startOfMonth();
        $endOfMonth = Carbon::create(Carbon::now()->year, $selectedMonth, 1)->endOfMonth();

        $vacancies = Vacancy::selectRaw('WEEK(created_at, 1) as week, COUNT(*) as count')
            ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->groupBy('week')
            ->orderBy('week', 'asc')
            ->get();

        $weeklyData = [
            'Minggu ke-1' => 0,
            'Minggu ke-2' => 0,
            'Minggu ke-3' => 0,
            'Minggu ke-4' => 0,
        ];

        foreach ($vacancies as $vacancy) {
            $weekNumber = Carbon::createFromDate($startOfMonth->year, $selectedMonth)->setISODate($startOfMonth->year, $vacancy->week)->weekOfMonth;

            if ($weekNumber >= 1 && $weekNumber <= 4) {
                $weeklyData['Minggu ke-' . $weekNumber] += $vacancy->count;
            }
        }

        return [
            'datasets' => [
                [
                    'label' => 'Vacancy',
                    'data' => array_values($weeklyData), 
                    'borderColor' => '#36A2EB',
                    'fill' => false,
                ],
            ],
            'labels' => array_keys($weeklyData),
        ];
    }
}
