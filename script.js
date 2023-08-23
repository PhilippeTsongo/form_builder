$(document).ready(function() {
    const formBuilder = $('.form-builder');
    const generatedForm = $('#generated-form');
    const generateJsonButton = $('#generate-json');

    formBuilder.on('click', '.form-field', function() {
        const fieldType = $(this).attr('data-type');
        const field = createField(fieldType);
        generatedForm.append(field);
    });

    generateJsonButton.on('click', function() {
        const formData = [];
        generatedForm.find('.form-field').each(function() {
            const fieldType = $(this).attr('data-type');
            const fieldName = $(this).find('input[name="field-name"]').val();
            const fieldPlaceholder = $(this).find('input[name="field-placeholder"]').val();
            const fieldDefaultValue = $(this).find('input[name="field-default-value"]').val();
            const fieldRequired = $(this).find('input[name="field-required"]').prop('checked');
            let fieldOptions = [];
            if (fieldType === 'select' || fieldType === 'radio') {
                $(this).find('input[name="field-option"]').each(function() {
                    fieldOptions.push($(this).val());
                });
            }
            formData.push({
                type: fieldType,
                name: fieldName,
                placeholder: fieldPlaceholder,
                defaultValue: fieldDefaultValue,
                required: fieldRequired,
                options: fieldOptions
            });
        });
        // const jsonData = JSON.stringify(formData, null, 2);
        // console.log(jsonData);

        const jsonData = JSON.stringify(formData);
        $('#form-data').val(jsonData);
        console.log(jsonData);
    });

    function createField(type) {
        const field = $('<div>').addClass('form-field');
        field.attr('data-type', type);
        let fieldHtml = `
            <label>Name: <input type="text" name="field-name"></label><br>
            <label>Placeholder: <input type="text" name="field-placeholder"></label><br>
            <label>Default Value: <input type="text" name="field-default-value"></label><br>
            <label>Required: <input type="checkbox" name="field-required"></label><br>
        `;
        if (type === 'select' || type === 'radio') {
            fieldHtml += `<label>Options:</label><br>`;
            fieldHtml += `<input type="text" name="field-option"><button class="add-option">Add Option</button><br>`;

            fieldHtml += `<input type="text" name="field-option"><button class="remove-option">Remove Option</button><br>`;

            
        }
        field.append(fieldHtml);
        return field;
    }

    generatedForm.on('click', '.add-option', function(event) {
        event.preventDefault();
        $(this).before('<input type="text" name="field-option"> <button class="remove-option">Remove Option</button><br>');
    });

    generatedForm.on('click', '.remove-option', function(event) {
        event.preventDefault();
        $(this).prev('input[name="field-option"]').remove();
        $(this).remove();
    });
});
