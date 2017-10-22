(function() {
    var app = angular.module('dogpedia', []);
    var dogBreeds = [
      {
        name: "Bernardýn",
        description: "Je to hau.",
        isnice: false,
      },
      {
        name: "Corgi",
        description: "Je to krásný hau.",
        isnice: false,
      },
      {
        name: "Bulldog",
        description: "Je to nasraný hau.",
        isnice: true,
      },
  ];
    app.controller('DogpediaController', function(){
      this.breeds = dogBreeds;
    });
    app.controller('PanelController', function(){
      this.tab = 1;
      this.selectTab = function(setTab) {
        this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
        return checkTab === this.tab;
      };
    });
})();
