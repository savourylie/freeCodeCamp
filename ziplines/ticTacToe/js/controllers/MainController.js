app.controller('MainController', ['$scope', function ($scope) {
  // Side Status
  var side = true; // The user plays X, and O if side === false;
  var counter = 0;

  // Check Duplicates (true means no dupes)
  function hasDuplicates(array) {
    return (new Set(array)).size === array.length;
  }

  // Array generator
  function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
  }

  // Initialize Game
  var initialize = function() {
    counter = 0;

    // Create 2D-Array
    $scope.space = createArray(3, 3);
    console.log($scope.space);

    side = confirm("Do you wanna play X or O? OK for X and Cancel for O");
  }

  initialize();

  // AI
  var AI = function() {
    var smart = false;

    // For AI to know whether to play first
    if (!side || (side && counter % 2 !== 0) ) {

      // // Smart Player
      // for (var i = 0; i < 2; ++i) {
      //   for (var j = 0; j < 2; ++j) {
      //     if (($scope.space[i][j] === $scope.space[i][j+1] || $scope.space[i][j] === $scope.space[i][j+2]) && $scope.space[i][j] !== undefined) {
      //       if ($scope.space[i][0] === $scope.space[i][1] && $scope.space[i][2] === undefined) {
      //         console.log('row');
      //         if (side) {
      //           $scope.space[i][2] = 'O';
      //         }
      //
      //         else {
      //           $scope.space[i][2] = 'X';
      //         }
      //       }
      //
      //       else if ($scope.space[i][1] === $scope.space[i][2] && $scope.space[i][0] === undefined) {
      //         console.log('row');
      //         if (side) {
      //           $scope.space[i][0] = 'O';
      //         }
      //
      //         else {
      //           $scope.space[i][0] = 'X';
      //         }
      //       }
      //
      //       else if ($scope.space[i][0] === $scope.space[i][2] && $scope.space[i][1] === undefined) {
      //         console.log('row');
      //         if (side) {
      //           $scope.space[i][1] = 'O';
      //         }
      //
      //         else {
      //           $scope.space[i][1] = 'X';
      //         }
      //       }
      //       smart = true;
      //       console.log("Smart Activated");
      //       break;
      //     }
      //
      //     else if (($scope.space[i][j] === $scope.space[i+1][j] || $scope.space[i][j] === $scope.space[i+2][j]) && $scope.space[i][j] !== undefined) {
      //       if ($scope.space[0][j] === $scope.space[1][j] && $scope.space[2][j] === undefined) {
      //         console.log('col');
      //         if (side) {
      //           $scope.space[2][j] = 'O';
      //         }
      //
      //         else {
      //           $scope.space[2][j] = 'X';
      //         }
      //       }
      //
      //       else if ($scope.space[0][j] === $scope.space[2][j] && $scope.space[1][j] === undefined) {
      //         console.log('col');
      //         if (side) {
      //           $scope.space[1][j] = 'O';
      //         }
      //
      //         else {
      //           $scope.space[1][j] = 'X';
      //         }
      //       }
      //
      //       else if ($scope.space[1][j] === $scope.space[2][j] && $scope.space[0][j] === undefined) {
      //         console.log('col');
      //         if (side) {
      //           $scope.space[0][j] = 'O';
      //         }
      //
      //         else {
      //           $scope.space[0][j] = 'X';
      //         }
      //       }
      //       smart = true;
      //       console.log("Smart Activated");
      //       break;
      //     }
      //   }
      // }
      //
      // if ($scope.space[0][0] === $scope.space[1][1]) {
      //   if (side) {
      //     $scope.space[2][2] = 'O';
      //   }
      //
      //   else {
      //     $scope.space[2][2] = 'X';
      //   }
      //   smart = true;
      //   console.log("Smart Activated");
      // }
      //
      // else if ($scope.space[0][0] === $scope.space[2][2]) {
      //   if (side) {
      //     $scope.space[1][1] = 'O';
      //   }
      //
      //   else {
      //     $scope.space[1][1] = 'X';
      //   }
      //   smart = true;
      //   console.log("Smart Activated");
      // }
      //
      // else if ($scope.space[1][1] === $scope.space[2][2]) {
      //   if (side) {
      //     $scope.space[0][0] = 'O';
      //   }
      //
      //   else {
      //     $scope.space[0][0] = 'X';
      //   }
      //   smart = true;
      //   console.log("Smart Activated");
      // }
      //
      // else if ($scope.space[2][0] === $scope.space[1][1]) {
      //   if (side) {
      //     $scope.space[0][2] = 'O';
      //   }
      //
      //   else {
      //     $scope.space[0][2] = 'X';
      //   }
      //   smart = true;
      //   console.log("Smart Activated");
      // }
      //
      // else if ($scope.space[2][0] === $scope.space[0][2]) {
      //   if (side) {
      //     $scope.space[1][1] = 'O';
      //   }
      //
      //   else {
      //     $scope.space[1][1] = 'X';
      //   }
      //   smart = true;
      //   console.log("Smart Activated");
      // }
      //
      // else if ($scope.space[1][1] === $scope.space[0][2]) {
      //   if (side) {
      //     $scope.space[2][0] = 'O';
      //   }
      //
      //   else {
      //     $scope.space[2][0] = 'X';
      //   }
      //   smart = true;
      //   console.log("Smart Activated");
      // }


      // Naive Player
      if (smart === false) {
        var row = Math.floor(Math.random() * 3);
        var col = Math.floor(Math.random() * 3);

        while ($scope.space[row][col] !== undefined) {
          row = Math.floor(Math.random() * 3);
          col = Math.floor(Math.random() * 3);
        }

        if (side) {
          $scope.space[row][col] = 'O';
        }

        else {
          $scope.space[row][col] = 'X';
        }
      }

      counter++;
      endgame();
    }
  }

  // Endgame Check
  var endgame = function() {
    var checker = false;

    if (counter === 9 || ($scope.space[0][0] === $scope.space[0][1] && $scope.space[0][0] === $scope.space[0][2] && $scope.space[0][0] !== undefined) || ($scope.space[1][0] === $scope.space[1][1] && $scope.space[1][0] === $scope.space[1][2] && $scope.space[1][0] !== undefined) || ($scope.space[2][0] === $scope.space[2][1] && $scope.space[2][0] === $scope.space[2][2] && $scope.space[2][0] !== undefined) || ($scope.space[0][0] === $scope.space[1][0] && $scope.space[0][0] === $scope.space[2][0] && $scope.space[0][0] !== undefined) || ($scope.space[0][1] === $scope.space[1][1] && $scope.space[0][1] === $scope.space[2][1] && $scope.space[0][1] !== undefined) || ($scope.space[0][2] === $scope.space[1][2] && $scope.space[0][2] === $scope.space[2][2] && $scope.space[0][2] !== undefined) || ($scope.space[0][0] === $scope.space[1][1] && $scope.space[0][0] === $scope.space[2][2] && $scope.space[0][0] !== undefined) || ($scope.space[2][0] === $scope.space[1][1] && $scope.space[2][0] === $scope.space[0][2] && $scope.space[2][0] !== undefined)) {
      checker = true;
    }

    if (checker) {
        // Check Winning Scenarios
        // Someone has won
        if ($scope.space[0][0] === $scope.space[0][1] && $scope.space[0][0] === $scope.space[0][2]) {
          alert($scope.space[0][0] + " wins.");
          initialize();
        }

        else if ($scope.space[1][0] === $scope.space[1][1] && $scope.space[1][0] === $scope.space[1][2]) {
          alert($scope.space[1][0] + " wins.");
          initialize();
        }

        else if ($scope.space[2][0] === $scope.space[2][1] && $scope.space[2][0] === $scope.space[2][2]) {
          alert($scope.space[2][0] + " wins.");
          initialize();
        }

        else if ($scope.space[0][0] === $scope.space[1][0] && $scope.space[0][0] === $scope.space[2][0]) {
          alert($scope.space[0][0] + " wins.");
          initialize();
        }

        else if ($scope.space[0][1] === $scope.space[1][1] && $scope.space[0][1] === $scope.space[2][1]) {
          alert($scope.space[0][1] + " wins.");
          initialize();
        }

        else if ($scope.space[0][2] === $scope.space[1][2] && $scope.space[0][2] === $scope.space[2][2]) {
          alert($scope.space[0][2] + " wins.");
          initialize();
        }

        else if ($scope.space[0][0] === $scope.space[1][1] && $scope.space[0][0] === $scope.space[2][2]) {
          alert($scope.space[0][0] + " wins.");
          initialize();
        }

        else if ($scope.space[0][2] === $scope.space[1][1] && $scope.space[0][2] === $scope.space[2][0]) {
          alert($scope.space[0][2] + " wins.");
          initialize();
        }

        // No one has won
        else {
          alert("It's a tie!");
          initialize();
        }
        return true;
    }

    else {
      return false;
    }
    console.log('endgame evaulated');
  }

  $scope.fill00 = function() {
    if ($scope.space[0][0] === undefined) {
      if (side) {
        $scope.space[0][0] = 'X';
      }
      else {
        $scope.space[0][0] = 'O';
      }
      console.log($scope.space[0][0]);
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill01 = function() {
    if ($scope.space[0][1] === undefined) {
      if (side) {
        $scope.space[0][1] = 'X';
      }
      else {
        $scope.space[0][1] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill02 = function() {
    if ($scope.space[0][2] === undefined) {
      if (side) {
        $scope.space[0][2] = 'X';
      }
      else {
        $scope.space[0][2] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill10 = function() {
    if ($scope.space[1][0] === undefined) {
      if (side) {
        $scope.space[1][0] = 'X';
      }
      else {
        $scope.space[1][0] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill11 = function() {
    if ($scope.space[1][1] === undefined) {
      if (side) {
        $scope.space[1][1] = 'X';
      }
      else {
        $scope.space[1][1] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill12 = function() {
    if ($scope.space[1][2] === undefined) {
      if (side) {
        $scope.space[1][2] = 'X';
      }
      else {
        $scope.space[1][2] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill20 = function() {
    if ($scope.space[2][0] === undefined) {
      if (side) {
        $scope.space[2][0] = 'X';
      }
      else {
        $scope.space[2][0] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill21 = function() {
    if ($scope.space[2][1] === undefined) {
      if (side) {
        $scope.space[2][1] = 'X';
      }
      else {
        $scope.space[2][1] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

  $scope.fill22 = function() {
    if ($scope.space[2][2] === undefined) {
      if (side) {
        $scope.space[2][2] = 'X';
      }
      else {
        $scope.space[2][2] = 'O';
      }
      counter++;
      endgame();
      AI();
    }
  }

}]);
