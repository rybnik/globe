Ember.TEMPLATES["_searchBar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                            ");
  hashContexts = {'name': depth0,'disabledBinding': depth0,'valueBinding': depth0,'contentBinding': depth0};
  hashTypes = {'name': "STRING",'disabledBinding': "STRING",'valueBinding': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("type"),
    'disabledBinding': ("view.disabled"),
    'valueBinding': ("controller.advancedSearchOptions.type.value"),
    'contentBinding': ("App.static.searchParams.type")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                            ");
  hashContexts = {'name': depth0,'valueBinding': depth0,'disabledBinding': depth0,'contentBinding': depth0};
  hashTypes = {'name': "STRING",'valueBinding': "STRING",'disabledBinding': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("running"),
    'valueBinding': ("controller.advancedSearchOptions.running.value"),
    'disabledBinding': ("view.disabled"),
    'contentBinding': ("App.static.searchParams.running")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                            ");
  hashContexts = {'name': depth0,'disabledBinding': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'contentBinding': depth0};
  hashTypes = {'name': "STRING",'disabledBinding': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("country"),
    'disabledBinding': ("view.disabled"),
    'valueBinding': ("controller.advancedSearchOptions.country.value"),
    'optionValuePath': ("content.key"),
    'optionLabelPath': ("content.value"),
    'contentBinding': ("App.static.countriesArray")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                        <input name=\"as\" type=\"text\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'value': ("controller.advancedSearchOptions.as.value")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'disabled': ("view.disabled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n                        ");
  hashContexts = {'name': depth0,'disabledBinding': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'contentBinding': depth0};
  hashTypes = {'name': "STRING",'disabledBinding': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("flag"),
    'disabledBinding': ("view.disabled"),
    'valueBinding': ("controller.advancedSearchOptions.flag.value"),
    'optionValuePath': ("content.key"),
    'optionLabelPath': ("content.key"),
    'contentBinding': ("App.static.iconsArray")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n                    ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"fullwidth searchbar sticky\">\n    <div class=\"row\">\n        <div class=\"large-2 columns\">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n        <div class=\"large-9 columns\">\n            ");
  hashContexts = {'valueBinding': depth0,'action': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'action': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("value"),
    'action': ("search"),
    'id': ("teh-search")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n        <!-- coming soon (tm) -->\n        <div class=\"small-1 columns\">\n            <div title=\"search settings\" class=\"entypo\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAdvancedSearch", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#9881;</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"fullwidth searchbar-advanced\">\n    <div class=\"row\" >\n        <div class=\"small-12 columns advanced-search advanced-search-disabled\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("controller.advancedSearch:advanced-search-enabled:advanced-search-disabled")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <form class=\"advanced-search-form\">\n                <div class=\"row\">\n                    <div class=\"large-4 columns\">\n                        ");
  hashContexts = {'label': depth0,'enabledBinding': depth0,'valueBinding': depth0};
  hashTypes = {'label': "STRING",'enabledBinding': "STRING",'valueBinding': "STRING"};
  stack2 = helpers.view.call(depth0, "App.ToggleEnableView", {hash:{
    'label': ("Type"),
    'enabledBinding': ("controller.advancedSearchOptions.type.enabled"),
    'valueBinding': ("controller.advancedSearchOptions.type")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                    <div class=\"large-4 columns\">\n                        ");
  hashContexts = {'label': depth0,'enabledBinding': depth0};
  hashTypes = {'label': "STRING",'enabledBinding': "STRING"};
  stack2 = helpers.view.call(depth0, "App.ToggleEnableView", {hash:{
    'label': ("Running"),
    'enabledBinding': ("controller.advancedSearchOptions.running.enabled")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                    <div class=\"large-4 columns\">\n                        ");
  hashContexts = {'label': depth0,'enabledBinding': depth0};
  hashTypes = {'label': "STRING",'enabledBinding': "STRING"};
  stack2 = helpers.view.call(depth0, "App.ToggleEnableView", {hash:{
    'label': ("Country"),
    'enabledBinding': ("controller.advancedSearchOptions.country.enabled")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                </div>\n                <div class=\"row\">\n                <div class=\"large-4 columns\">\n                    ");
  hashContexts = {'label': depth0,'enabledBinding': depth0};
  hashTypes = {'label': "STRING",'enabledBinding': "STRING"};
  stack2 = helpers.view.call(depth0, "App.ToggleEnableView", {hash:{
    'label': ("AS"),
    'enabledBinding': ("controller.advancedSearchOptions.as.enabled")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n                <div class=\"large-4 columns\">\n                    ");
  hashContexts = {'label': depth0,'enabledBinding': depth0};
  hashTypes = {'label': "STRING",'enabledBinding': "STRING"};
  stack2 = helpers.view.call(depth0, "App.ToggleEnableView", {hash:{
    'label': ("Flag"),
    'enabledBinding': ("controller.advancedSearchOptions.flag.enabled")
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n                <div class=\"large-4 columns text-right\">\n                    <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Search</button>\n                </div>\n            </div>\n            </form>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"fullwidth message-display text-left\">\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n            <!-- show message without escaping content -->\n            <h5>");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "App.message", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>\n        </div>\n    </div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "searchBar", options) : helperMissing.call(depth0, "partial", "searchBar", options))));
  data.buffer.push("\n<div class=\"outlet\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n<div class=\"row footer\">\n    <div class=\"small-12 columns\">\n        <p>Want to contribute or view the source? Check out the repository <a href=\"https://github.com/makepanic/emberjs-tor-onionoo\">on github</a>.</p>\n        <p>Tor Onionoo Search is not affiliated with the Tor project.\n        \"Tor\" and the \"Onion Logo\" are registered trademarks of The Tor Project,\n        Inc.</p>\n        <p>Entypo pictograms by Daniel Bruce — <a href=\"http://www.entypo.com/\">www.entypo.com</a>.</p>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["bridgeDetail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    <div class=\"row relay-meta-status\">\n        <div class=\"large-6 columns\">\n            <strong>Uptime</strong>\n            <p class=\"uptime-string\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.uptimeFull),stack1 ? stack1.call(depth0, "last_restarted", options) : helperMissing.call(depth0, "uptimeFull", "last_restarted", options))));
  data.buffer.push("</p>\n        </div>\n        <div class=\"large-6 columns\">\n            <strong>Running</strong>\n            <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.truefalse),stack1 ? stack1.call(depth0, "running", options) : helperMissing.call(depth0, "truefalse", "running", options))));
  data.buffer.push("</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"large-6 columns\">\n\n            <ul class=\"relay-meta\">\n                <li class=\"relay-meta-headline\">Configuration</li>\n                <li>\n                    <strong>Nickname</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nickname", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>OR Addresses</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "or_addresses", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n                <li>\n                    <strong>Advertised Bandwidth</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bandwidth),stack1 ? stack1.call(depth0, "advertised_bandwidth", options) : helperMissing.call(depth0, "bandwidth", "advertised_bandwidth", options))));
  data.buffer.push("</p>\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"large-6 columns\">\n\n            <ul class=\"relay-meta\">\n                <li class=\"relay-meta-headline\">Properties</li>\n                <li>\n                    <strong>Hashed Fingerprint</strong>\n                    <p class=\"fingerprint\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hashed_fingerprint", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Flags</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "flags", {hash:{},inverse:self.program(4, program4, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n                <li>\n                    <strong>Last Restarted</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "last_restarted", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Platform</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "platform", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Pool Assignment</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "pool_assignment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n\n            </ul>\n\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n\n            <div class=\"row\">\n                <div class=\"large-12 columns relay-bw\">\n                    ");
  hashContexts = {'dataBinding': depth0,'timePeriodsBinding': depth0};
  hashTypes = {'dataBinding': "STRING",'timePeriodsBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RelayBandwidthView", {hash:{
    'dataBinding': ("controller.bandwidthData"),
    'timePeriodsBinding': ("controller.bandwidthPeriods")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                        ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                            <li>none</li>\n                        ");
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "flaggifyLong", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n            ");
  hashContexts = {'message': depth0};
  hashTypes = {'message': "STRING"};
  stack1 = helpers.view.call(depth0, "App.LoadingIndicatorView", {hash:{
    'message': ("Loading bridge details...")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("No detail found :(");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.showContent", {hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["graphItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.base64")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" target=\"_blank\">save</a>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    &nbsp;\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    ");
  hashContexts = {'viewName': depth0,'contentBinding': depth0};
  hashTypes = {'viewName': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("timePeriodSelect"),
    'contentBinding': ("view.timePeriods")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

  data.buffer.push("<ul class=\"relay-meta\">\n    <li class=\"themed-list-headline\">\n        <div class=\"row\">\n            <div class=\"large-1 columns\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.base64", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"large-8 columns text-center\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <div class=\"large-3 columns\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.timePeriods.length", {hash:{},inverse:self.program(3, program3, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    <li><div class=\"graph-canvas\"></div></li>\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"row\">\n    <div class=\"small-12 columns\">\n        <h2>Welcome to Tor Onionoo Search</h2>\n\n        <p>Tor Onionoo Search helps you find informations about currently running <a href=\"https://www.torproject.org/\">Tor relays</a>. This application is inspired by <a href=\"https://atlas.torproject.org\">Atlas</a> and uses <a href=\"http://emberjs.com/\">Ember.js</a> as JS framework.</p>\n        <p>Data comes from the <a href=\"https://www.torproject.org/projects/onionoo.html\">Onionoo</a> API.</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"small-12 columns\">\n        <h3>Top 10 relays by consensus weight</h3>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"small-12 columns\">\n        ");
  hashContexts = {'dataBinding': depth0};
  hashTypes = {'dataBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RelaySummariesView", {hash:{
    'dataBinding': ("controller.content")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["loadingIndicator"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"loading-indicator\">\n                <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n            </div>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n    <div class=\"small-12 columns\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.isDataLoaded", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["relayDetail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    <div class=\"row relay-meta-status\">\n        <div class=\"large-6 columns\">\n            <strong>Uptime</strong>\n            <p class=\"uptime-string\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.uptimeFull),stack1 ? stack1.call(depth0, "last_restarted", options) : helperMissing.call(depth0, "uptimeFull", "last_restarted", options))));
  data.buffer.push("</p>\n        </div>\n        <div class=\"large-6 columns\">\n            <strong>Running</strong>\n            <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.truefalse),stack1 ? stack1.call(depth0, "running", options) : helperMissing.call(depth0, "truefalse", "running", options))));
  data.buffer.push("</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"large-6 columns\">\n\n            <ul class=\"relay-meta\">\n                <li class=\"relay-meta-headline\">Configuration</li>\n                <li>\n                    <strong>Nickname</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nickname", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>OR Addresses</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "or_addresses", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n                <li>\n                    <strong>Contact</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "contact", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Dir Address</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dir_address", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Advertised Bandwidth</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bandwidth),stack1 ? stack1.call(depth0, "advertised_bandwidth", options) : helperMissing.call(depth0, "bandwidth", "advertised_bandwidth", options))));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Exit Policy Summary</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        <li class=\"relay-meta-item-list-title accept\">accept</li>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "exit_policy_summary.accept", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                    <ul class=\"relay-meta-item-list\">\n                        <li class=\"relay-meta-item-list-title reject\">reject</li>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "exit_policy_summary.reject", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n                <li>\n                    <strong>Exit Policy</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "exit_policy", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"large-6 columns\">\n\n            <ul class=\"relay-meta\">\n                <li class=\"relay-meta-headline\">Properties</li>\n                <li>\n                    <strong>Fingerprint</strong>\n                    <p class=\"fingerprint\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fingerprint", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Flags</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "flags", {hash:{},inverse:self.program(4, program4, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n                <li>\n                    <strong>Country</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.fullCountry),stack1 ? stack1.call(depth0, "country", options) : helperMissing.call(depth0, "fullCountry", "country", options))));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>AS Number</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "as_number", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>AS Name</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "as_name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Last Restarted</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "last_restarted", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n                <li>\n                    <strong>Family Members</strong>\n                    <ul class=\"relay-meta-item-list\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "family", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </ul>\n                </li>\n                <li>\n                    <strong>Platform</strong>\n                    <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "platform", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                </li>\n\n            </ul>\n\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n\n            <div class=\"row\">\n                <div class=\"large-6 columns relay-bw\">\n                    ");
  hashContexts = {'dataBinding': depth0,'timePeriodsBinding': depth0};
  hashTypes = {'dataBinding': "STRING",'timePeriodsBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RelayBandwidthView", {hash:{
    'dataBinding': ("controller.bandwidthData"),
    'timePeriodsBinding': ("controller.bandwidthPeriods")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n                <div class=\"large-6 columns relay-we\">\n                    ");
  hashContexts = {'dataBinding': depth0,'timePeriodsBinding': depth0};
  hashTypes = {'dataBinding': "STRING",'timePeriodsBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RelayWeightView", {hash:{
    'dataBinding': ("controller.weightData"),
    'timePeriodsBinding': ("controller.weightPeriods")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                        ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                            <li>none</li>\n                        ");
  }

function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "flaggifyLong", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n                        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n            ");
  hashContexts = {'message': depth0};
  hashTypes = {'message': "STRING"};
  stack1 = helpers.view.call(depth0, "App.LoadingIndicatorView", {hash:{
    'message': ("Loading relay details...")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("No detail found :(");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.showContent", {hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["summarySearch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n            ");
  hashContexts = {'dataBinding': depth0};
  hashTypes = {'dataBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.BridgeSummariesView", {hash:{
    'dataBinding': ("controller.bridges.content")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n            ");
  hashContexts = {'dataBinding': depth0};
  hashTypes = {'dataBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RelaySummariesView", {hash:{
    'dataBinding': ("controller.relays.content")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row tabbed-area\">\n    <div class=\"large-4 small-6 columns\">\n        <div\n            ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': (":tabbed-item controller.relaysActive:tabbed-active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "activateSummaries", "relays", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': (":indicator controller.relays.length:indicator-important")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.relays.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <span>Relays</span>\n        </div>\n        <div\n            ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': (":tabbed-item controller.bridgesActive:tabbed-active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "activateSummaries", "bridges", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': (":indicator controller.bridges.length:indicator-important")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.bridges.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n            <span>Bridges</span>\n        </div>\n    </div>\n</div>\n");
  hashContexts = {'isVisibleBinding': depth0};
  hashTypes = {'isVisibleBinding': "STRING"};
  stack1 = helpers.view.call(depth0, "App.SummaryHolderView", {hash:{
    'isVisibleBinding': ("controller.bridgesActive")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashContexts = {'isVisibleBinding': depth0};
  hashTypes = {'isVisibleBinding': "STRING"};
  stack1 = helpers.view.call(depth0, "App.SummaryHolderView", {hash:{
    'isVisibleBinding': ("controller.relaysActive")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["toggleEnableViewLayout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<label>\n    ");
  hashContexts = {'checkedBinding': depth0};
  hashTypes = {'checkedBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("view.enabled")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</label>\n<div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});