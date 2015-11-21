var app = {
    API_BASE_URL: 'http://localhost:8888',

    initialize: function() {
        app.loadLateBuses();
    },

    loadLateBuses: function() {
        $.ajax({
            cache: false,
            error: app.onLateBusLoadError,
            method: 'GET',
            success: app.onLateBusLoad,
            timeout: 5000,
            url: app.API_BASE_URL + '/latebuses'
        });
    },

    onLateBusLoadError: function(xhr, status, error) {
        alert('FAILED - TODO');
    },

    onLateBusLoad: function(data, status, xhr) {
        console.log(data);
    }
};

window.onload = function() {
    app.initialize();
}