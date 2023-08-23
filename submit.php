 <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Retrieve form data and JSON data
            // $formData = $_POST; // You might need to sanitize and validate data

            // JSON data
            $jsonData = $_POST['form-data'];
            $jsonDataArray = json_decode($jsonData, true);


            try {
                // Create a PDO instance for database connection
                // $pdo = new PDO('mysql:host=localhost; dbname=; charset=utf8', 'root', '');
                $connexion = new PDO('mysql:host=localhost; dbname=form_builder_db;charset=utf8', 'root', '');

                // Insert form data into the database using prepared statement
                $insert_form = $connexion->prepare("INSERT INTO forms (name, event_id, json_data_column) VALUES (?, ?, ?)");
                $insert_form->execute(array('exclusive fintech', '30', $jsonData));

                echo "Form data successfully inserted.";

            } catch (PDOException $e) {
                echo "Error: " . $e->getMessage();
            }

            // Close the connection
            $pdo = null;
        }
    ?>

