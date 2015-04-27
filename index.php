<html ng-app="cvApp">
<head>
    <title>CV app</title>
      <link rel="stylesheet" href="css/bootstrap.css">
      <link rel="stylesheet" href="css/custom.css">
</head>
<body>
	<header>
		<div class="container-fluid">
			<h1 class="text-center">Create CV</h1>
		</div>
	</header>
    <div ng-view class="container">
        
    </div>
    <footer>
    	<div class="container-fluid">
	    	<div class="copyright text-center">copyright 2015</div>
    	</div>
    </footer>
    <script src="lib/angular.min.js"></script>
    <script src="lib/angular-route.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="js/cvApp.js"></script>
    <script src="lib/angular-file-dnd.min.js"></script>
<!--     // <script src="lib/angular-file-upload-shim.js"></script> 
    // <script src="lib/angular-file-upload.js"></script>  -->
     <!-- // <script src="lib/route-styles.js"></script> -->
    <script src="js/services/cvsService.js"></script> 
    <script src="js/controllers/cvCtrl.js"></script>
</body>
</html>




