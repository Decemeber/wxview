Component({
    // externalClasses: ['i-class'],

    properties: {
        // default, primary, ghost, info, success, warning, error
        headerText: {
            type: String,
            value: '',
        }
    },
    methods: {
        handleBack() {
            this.triggerEvent('myevent')
        }
    }
});
