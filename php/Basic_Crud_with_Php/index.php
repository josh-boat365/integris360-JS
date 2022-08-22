<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<title>🏥 Dashboard | ShirlPharm 💊</title>
	<!-- CDN - Links  -->
	<!-- Bootsrap CSS - CDN -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
	<!-- Fontawesome Icons  -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

	<!-- Embedded CSS  -->
	<style>
		.wrapper {
			width: 600px;
			margin: 0 auto;
		}

		table tr td:last-child {
			width: 120px;
		}
	</style>

	<script>
		$(document).ready(function() {
			$('[data-toggle="tooltip"]').tooltip();
		});
	</script>
</head>

<body>
	<div class="wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="mt-5 mb-3 clearfix">
						<h2 class="pull-left">💊ShirlPharm Employees🩺 Details</h2>
						<h5>Welcome to 💊ShirlPharm🩺</h5>
						<a href="create.php" class="btn btn-success pull-right"><i class="fa fa-plus"></i> Add New Employee</a>
					</div>
					<?php
					// Include database connection file
					require_once "database_connection.php";

					// Attempt select query execution
					$sql = "SELECT * FROM employees";
					if ($result = mysqli_query($link, $sql)) {
						if (
							mysqli_num_rows($result) >
							0
						) {
							echo '<table class="table table-bordered table-striped">';
							echo "<thead>";
							echo "<tr>";
							echo "<th>#</th>";
							echo "<th>Name</th>";
							echo "<th>Address</th>";
							echo "<th>Salary</th>";
							echo "<th>Action</th>";
							echo "</tr>";
							echo "</thead>";
							echo "<tbody>";

							while ($row = mysqli_fetch_array($result)) {
								echo "<tr>";
								echo "<td>" . $row['id'] . "</td>";
								echo "<td>" . $row['name'] . "</td>";
								echo "<td>" . $row['address'] . "</td>";
								echo "<td>" . $row['salary'] . "</td>";
								echo "<td>";
								echo '<a href="read.php?id=' . $row['id'] . '" class="mr-3" title="ViewRecordata-toggle="tooltip"><span class="fa fa-eye"></span></a>';
								echo '<a href="update.php?id=' . $row['id'] . '" class="mr-3" title="Update Record" data-toggle="tooltip"><span class="fa fa-pencil"></span></a>';
								echo '<a href="delete.php?id=' . $row['id'] . '" title="Delete Record" data-toggle="tooltip"><span class="fa fa-trash"></span></a>';
								echo "</td>";
								echo "</tr>";
							}
							echo "</tbody>";
							echo "</table>";
							// Free result set mysqli_free_result($result); } else{ echo
							'<div class="alert alert-danger"
							><em>No records were found.</em></div>';
						}
					} else {
						echo "Oops! Something went wrong. Please try again
						later.";
					} // Close connection mysqli_close($link); 
					?>
				</div>
			</div>
		</div>
	</div>
	<!-- Javascript CDN  -->
	<!-- JQuery CDN  -->
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<!-- Proper JS CDN  -->
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	<!-- Bootstrap JS CDN  -->
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>