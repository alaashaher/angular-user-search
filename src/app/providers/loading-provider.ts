import { Injectable } from '@angular/core';

@Injectable()
export class LoadingProvider {
    // to make the loagin the appear untill the service run
    private FirstLoadingId: string;
    private HttpLoadingId: string;
    private CheckStopFirstLoading: boolean;
    private NumbersOfCurrentHttpLoading: number;

    constructor() {
        this.FirstLoadingId = 'loading-div';
        this.HttpLoadingId = 'http-loading-div';
        this.CheckStopFirstLoading = true;
        this.NumbersOfCurrentHttpLoading = 0;
    }

    StopFirstLoading() {
        if (this.CheckStopFirstLoading === true) {
            this.CheckStopFirstLoading = false;
            let LoadingElement: any;
            LoadingElement = document.getElementById(this.FirstLoadingId);
            if (LoadingElement !== null) {
                LoadingElement.parentNode.removeChild(LoadingElement);
            }
        }
    }

    ViewHttpServiceLoading() {
        if (this.NumbersOfCurrentHttpLoading === 0) {
            this.CreatHttpServiceLaodingElements();
        } else if (this.NumbersOfCurrentHttpLoading > 0) {
            this.NumbersOfCurrentHttpLoading = this.NumbersOfCurrentHttpLoading + 1;
        }
    }

    private CreatHttpServiceLaodingElements() {
        let HttpLoading: HTMLElement;
        HttpLoading = document.createElement('div');
        HttpLoading.id = this.HttpLoadingId;
        // tslint:disable-next-line:max-line-length
        HttpLoading.innerHTML = '<div style="background-color: rgba(255, 255, 255, 0.85); z-index: 2000; position: fixed;width: 100%;height: 100%;left: 0;top: 0;"> <style> #http-loading-content:after {content: "";position: absolute;left: 15px;right: 15px;top: 15px;bottom: 15px }#http-loading-content:before {content: "";position: absolute;left: 5px;right: 5px;top: 5px;bottom: 5px }#http-loading-content {border: 3px solid transparent;border-top-color: #9d2d40;border-bottom-color: #9d2d40;border-radius: 50%;-webkit-animation: loader 2s linear infinite;-moz-animation: loader 2s linear infinite;-o-animation: loader 2s linear infinite;animation: loader 2s linear infinite }#http-loading-content:before {border: 3px solid transparent;border-top-color: #f36b25;border-bottom-color: #f36b25;border-radius: 50%;-webkit-animation: loader 3s linear infinite;-moz-animation: loader 2s linear infinite;-o-animation: loader 2s linear infinite;animation: loader 3s linear infinite }#http-loading-content:after {border: 3px solid transparent;border-top-color: #9d2d40;border-bottom-color: #9d2d40;border-radius: 50%;-webkit-animation: loader 1.5s linear infinite;animation: loader 1.5s linear infinite;-moz-animation: loader 2s linear infinite;-o-animation: loader 2s linear infinite }@-webkit-keyframes loaders {0% {-webkit-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg) }100% {-webkit-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg) }}@keyframes loader {0% {-webkit-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg) }100% {-webkit-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg) }}</style> <div id="http-loading-content" style=" display: block;position: relative;left: 50%;top: 50%;width: 170px;height: 170px;margin: -85px 0 0 -85px;"></div>'; this.NumbersOfCurrentHttpLoading = this.NumbersOfCurrentHttpLoading + 1;
        document.body.appendChild(HttpLoading);
    }

    CloseHttpServiceLoading() {
        if (this.NumbersOfCurrentHttpLoading === 1) {
            this.RemoveHttpServiceLaodingElements();
        } else if (this.NumbersOfCurrentHttpLoading > 1) {
            this.NumbersOfCurrentHttpLoading = this.NumbersOfCurrentHttpLoading - 1;
        }
    }

    private RemoveHttpServiceLaodingElements() {
        this.NumbersOfCurrentHttpLoading = this.NumbersOfCurrentHttpLoading - 1;
        let HttpLoadingElement: any;
        HttpLoadingElement = document.getElementById(this.HttpLoadingId);
        HttpLoadingElement.parentNode.removeChild(HttpLoadingElement);
    }

}

