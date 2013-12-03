define([
    "themes",
    "views/tab"
], function(THEMES, TerminalTab) {
    var commands = codebox.require("core/commands");
    var tabs = codebox.require("core/tabs");
    var settings = codebox.require("core/settings");

    var themes_map = {};
    _.each(THEMES, function(color, name) {
        themes_map[name] = name;
    });

    // Add settings
    settings.add({
        'namespace': "terminal",
        'title': "Terminal",
        'defaults': {
            'font': "monospace",
            'theme': 'monokai_soda'
        },
        'fields': {
            'font': {
                'label': "Font",
                'type': "select",
                'options': {
                    'monospace': "Monospace",
                    'arial': "Arial",
                    'Courier New': "Courier New",
                    "'MS Sans Serif', Geneva, sans-serif;": "MS Sans Serif",
                    "'Lucida Sans Unicode', 'Lucida Grande', sans-serif": "Lucida Sans Unicode"
                },
            },
            'theme': {
                'label': 'Theme',
                'type': 'select',
                'options': themes_map
            }
        }
    });

    // Add opening command
    commands.register("terminal.open", {
        title: "Terminal",
        icon: "terminal",
        shortcuts: [
            "t"
        ]
    }, function() {
        tabs.add(TerminalTab, {}, {
            'section': "terminals"
        });
    });
});