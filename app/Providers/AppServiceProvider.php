<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;
use Filament\Facades\Filament;
use Filament\Navigation\NavigationGroup;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
            Model::unguard();
            Filament::serving(function () {
                Filament::registerNavigationGroups([
                    NavigationGroup::make()
                         ->label('Job Management')
                         ->icon('heroicon-o-briefcase'),
                    NavigationGroup::make()
                        ->label('User Management')
                        ->icon('heroicon-o-user-group'),
                    NavigationGroup::make()
                        ->label('Settings')
                        ->icon('heroicon-s-cog')
                        ->collapsed(),
                ]);
            });

    }
}
