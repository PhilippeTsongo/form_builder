<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Builder</title>
    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        /* Add your CSS styles here */
        .form-builder {
            display: flex;
        }
        .form-field {
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
        }
        .form-preview {
            border: 1px solid #ccc;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="form-builder">
        <div class="form-field" data-type="text">Text Input</div>
        <div class="form-field" data-type="date">Date</div>
        <div class="form-field" data-type="textarea">Textarea</div>
        <div class="form-field" data-type="select">Select</div>
        <div class="form-field" data-type="radio">Radio</div>
    </div>
    <div class="form-preview">
        <h2>Form Preview</h2>
        <form id="generated-form">
            <!-- Selected fields will be added here -->
        </form>

        <form id="user-form" action="submit.php" method="post">
            <!-- Other form fields here -->
            <input type="hidden" name="form-data" id="form-data" />
            <button type="submit" id="generate-json">Submit Form and generate json</button>
        </form>

        <!-- <button >Generate JSON </button> -->
        
    </div>

    <script src="script.js"></script>
</body>
</html>
