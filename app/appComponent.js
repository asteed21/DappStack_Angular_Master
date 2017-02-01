angular.module('dappstackAngularMasterApp')

// This component can be used like: <users></users>
.component('users', {
  bindings: {
    // one-way input binding, e.g., 
    // <users users="$parentCtrl.userlist"></foo>
    // automatically bound to `users` on the controller
    users: '<'
  },
  
  controller: function() {
    this.clickHandler = function() {
      alert('something');
    };
    
    this.toggleActive = function(userId) {
      var user = this.users.find(user => user.id == userId);
      if (!user) return;
      user.active = !user.active;
    };
  },
  
  // implicit controllerAs: '$ctrl',
  template: `
    <h1>Users</h1>

    <button ng-click="$ctrl.clickHandler()">Do something</button>

    <ul>
      <li ng-repeat="user in $ctrl.users" ui-sref-active="userselected">
        <a ui-sref="userlist.detail({ userId: user.id })" 
            ng-disabled="!user.active"
            ng-class="{ deactivated: !user.active }">
          {{ user.name }}
        </a>
        
        <button ng-click="$ctrl.toggleActive(user.id)">
          {{ user.active ? "Deactivate" : "Activate" }}
        </button>
      </li>
    </ul>

    <div ui-view></div>
  `,
});