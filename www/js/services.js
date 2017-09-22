angular.module('starter.services', [])

.factory('Auth', function($q,$firebaseAuth,FBURL) {

    var ref = firebase.database().ref();

    var authObj = $firebaseAuth();

    var userArray = [];

    return {
        currentAuth:currentAuth,
        currentUser:currentUser,
        getUserData:getUserData,
        login:login,
        signup:signup,
        createUser:createUser,
        forgot:forgot,
        logout:logout
    }
  
    function currentAuth () {

        return $firebaseAuth();
    }

    function currentUser () {

        return userArray;
    } 

    function getUserData (option,authData) {
        var defer = $q.defer();
      
        if (authData) {       
            var userRef = firebase.database().ref().child("profiles").child(option).child(authData.uid);
            userRef.once('value', function(dataSnapshot) {
                var profileData = dataSnapshot.val();
                if (dataSnapshot.exists()) {
                    defer.resolve(profileData);               
                }else{
                    var errorData = {
                        code:"NO_MATCHING_ROLES"
                    }
                    if (option == "users") {
                        defer.resolve(getUserData("admins",authData));
                    }else if (option == "admins") {
                      defer.reject(errorData);            
                    };
                };
            });      
        }else{
            var errorData = {
                code:"NO_MATCHING_ROLES"
            }      
            defer.reject(errorData);            
         }

        return defer.promise;
    }

    function login (loginData) {
        var defer = $q.defer();

        firebase.auth().signInWithEmailAndPassword(loginData.email,loginData.password).then(function (authData) {
            getUserData("users",authData).then(function (profileData) {
                currentUser().push(profileData);          
                defer.resolve(profileData);
            });
        },function (error) {     
          defer.reject(error)
        });

        return defer.promise;
    }

    function signup (signupData){
        var defer = $q.defer();

        authObj.$createUserWithEmailAndPassword(signupData.email,signupData.password).then(function (authData) {
            createUser(authData,signupData).then(function (registerData) {
                currentUser().push(registerData);
                defer.resolve();
            });
        },function (error) {
            defer.reject(error);
        });

        return defer.promise;                 
    }

    function createUser (authData,registerData) {
        var defer = $q.defer();
      
        registerData.uid = authData.uid;
        registerData.role = "users";
        registerData.sinceDate = firebase.database.ServerValue.TIMESTAMP;

        delete registerData.password;

        ref.child("/profiles/users/"+authData.uid).set(registerData);

        defer.resolve(registerData);

      return defer.promise;
    }     

    function forgot (profileData) {
        var defer = $q.defer();
        firebase.auth().sendPasswordResetEmail(profileData.email).then(function () {
            defer.resolve()
        },function (error) {
            defer.reject(error)
        });
        return defer.promise;
    }

    function logout () {
        var defer = $q.defer();
        firebase.auth().signOut().then(function () {
            userArray = [];
            angular.copy(currentUser, []);
            defer.resolve()
        },function (error) {
            defer.reject(error)
        });
      return defer.promise;
    }  
})

.factory('DatabaseService', function($q, FBURL, Auth, $firebaseArray, $firebaseAuth) {

    var ref = firebase.database().ref();

    var authObj = $firebaseAuth();

    return {
        addSectionItem:addSectionItem,
        editSectionItem:editSectionItem,
        getSectionItems:getSectionItems,
        getFAQS:getFAQS
    }

    function addSectionItem(itemData,section) {
        var defer = $q.defer();   
            
        itemData.datetime = firebase.database.ServerValue.TIMESTAMP;

        ref.child("/"+section+"/").push(itemData);

        defer.resolve();

        return defer.promise;
    }

    function editSectionItem(itemData,section,itemID) {
        var defer = $q.defer();      

        ref.child("/"+section+"/").child(itemID).set(itemData);

        defer.resolve();

        return defer.promise;
    }

    function getSectionItems(section) {
        return $firebaseArray(ref.child("/"+section+"/"));
    }


    function getFAQS() {
        return $firebaseArray(ref.child("/FAQ/"));
    }
})

.factory("Alerter", function($ionicPopup){

  var Alerter = {
    showAlert: function (title,message) {
        var alertPopup = $ionicPopup.alert({
          title: title,
          template: message
        });         
    }
  }
  
  return Alerter;
});
