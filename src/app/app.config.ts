import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     CoreModule,
     SharedModule,
     AuthModule,
     HomeModule
  ]
};
