import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { WeatherService } from './weather.service';
import { mergeMap, map, catchError } from 'rxjs/operators'
import { loadlWeatherSuccess, getListSuccess } from './app.actions'
import { of } from 'rxjs';
import { state } from '@angular/animations';
import { ListService } from './list.service';


@Injectable()
export class WeatherEffect { 
    constructor(
        private action : Actions, 
        private weatherService: WeatherService
    ) { }

    loadWeather = createEffect( () => this.action.pipe( 
        //lắng nghe sự kiện của kiểu action: '[Weather component] Load Data'
            ofType('[Weather component] Load Weather'),
            mergeMap(() => this.weatherService.getWeatherData().pipe(
                map(data => loadlWeatherSuccess({...state, payload: data})),
                catchError(()=> of({type: '[Weather Component] Load Error'}))
                )
            )
        )
    )
}

@Injectable()
export class ListEffect { 
    constructor(
        private action: Actions, 
        private listService: ListService
    ) {}

    loadList = createEffect( () => this.action.pipe(
        ofType('[List-person component] get list'), 
        mergeMap(()=> this.listService.getList().pipe(
            map(data => getListSuccess({...state, payload:data})), 
            catchError(()=> of({type:'[List-person component] get list failed'}))
        ))
    ))
}