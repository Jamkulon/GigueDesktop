namespace gigueApp.Controllers {

    export class HomeController {
        public musicians;

        constructor(private $http: ng.IHttpService) {
            this.$http.get(`/api/musicians`).then((response) => {
                this.musicians = response.data;
            })
        }
    }//end homecontroller



    export class AboutController {
        public musician;

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService) {
            this.$http.get(`/api/musicians` + this.$stateParams[`id`]).then((response) => {
                this.musician = response.data;
            })
        }
    }//end about controller

    export class addMusicianController {
        public musician;

        public addMusician() {
            this.$http.post(`/api/musicians`, this.musician).then((response) => {
                this.$state.go(`home`);
            })
        }
        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {

        }
    }

}
