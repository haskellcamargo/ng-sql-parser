/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[5,29],$V2=[1,14],$V3=[1,13],$V4=[5,29,34,44],$V5=[1,17],$V6=[5,29,34,44,47,64],$V7=[1,25],$V8=[1,30],$V9=[1,29],$Va=[1,32],$Vb=[1,42],$Vc=[1,46],$Vd=[1,47],$Ve=[1,43],$Vf=[1,44],$Vg=[1,41],$Vh=[1,45],$Vi=[1,27],$Vj=[5,29,34],$Vk=[5,29,34,44,47],$Vl=[1,62],$Vm=[19,45],$Vn=[1,65],$Vo=[1,66],$Vp=[1,67],$Vq=[1,68],$Vr=[1,69],$Vs=[5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,71,72,73,74,76,79,81,82,88,89,90,91,92,93,95,98],$Vt=[1,76],$Vu=[5,19,26,27,29,34,37,38,40,41,43,44,45,46,47,53,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,95,98],$Vv=[5,19,26,27,29,30,34,37,38,39,40,41,43,44,45,46,47,53,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,94,95,98],$Vw=[1,93],$Vx=[1,104],$Vy=[1,113],$Vz=[5,29,34,44,45,46],$VA=[1,121],$VB=[5,29,34,44,45,47,66],$VC=[5,29,34,43,44,47,64],$VD=[1,127],$VE=[1,128],$VF=[1,129],$VG=[1,130],$VH=[5,29,34,37,38,39,40,41,43,44,47,64],$VI=[5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,76,79,81,82,88,89,90,91,92,93,95,98],$VJ=[69,70,81],$VK=[5,29,34,37,38,40,41,43,44,47,64],$VL=[5,29,34,44,58,60];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Root":3,"Query":4,"EOF":5,"SelectQuery":6,"Unions":7,"SelectWithLimitQuery":8,"BasicSelectQuery":9,"Select":10,"OrderClause":11,"GroupClause":12,"LimitClause":13,"SelectClause":14,"WhereClause":15,"SELECT":16,"Top":17,"Fields":18,"FROM":19,"Table":20,"Joins":21,"DISTINCT":22,"TOP":23,"Expression":24,"Literal":25,"AS":26,"LEFT_PAREN":27,"List":28,"RIGHT_PAREN":29,"WINDOW":30,"WINDOW_FUNCTION":31,"Number":32,"Union":33,"UNION":34,"ALL":35,"Join":36,"INNER":37,"JOIN":38,"ON":39,"LEFT":40,"RIGHT":41,"OUTER":42,"WHERE":43,"LIMIT":44,"SEPARATOR":45,"OFFSET":46,"ORDER":47,"BY":48,"OrderArgs":49,"OffsetClause":50,"OrderArg":51,"Value":52,"DIRECTION":53,"OffsetRows":54,"FetchClause":55,"ROW":56,"ROWS":57,"FETCH":58,"FIRST":59,"ONLY":60,"NEXT":61,"GroupBasicClause":62,"HavingClause":63,"GROUP":64,"ArgumentList":65,"HAVING":66,"CASE":67,"CaseBodies":68,"END":69,"ELSE":70,"MATH":71,"MATH_MULTI":72,"OPERATOR":73,"BETWEEN":74,"BetweenExpression":75,"CONDITIONAL":76,"SUB_SELECT_OP":77,"SubSelectExpression":78,"SUB_SELECT_UNARY_OP":79,"CaseBody":80,"WHEN":81,"THEN":82,"String":83,"Function":84,"UserFunction":85,"Boolean":86,"Parameter":87,"NUMBER":88,"BOOLEAN":89,"PARAMETER":90,"STRING":91,"DBLSTRING":92,"LITERAL":93,"DOT":94,"FUNCTION":95,"AggregateArgumentList":96,"Field":97,"STAR":98,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",16:"SELECT",19:"FROM",22:"DISTINCT",23:"TOP",26:"AS",27:"LEFT_PAREN",29:"RIGHT_PAREN",30:"WINDOW",31:"WINDOW_FUNCTION",34:"UNION",35:"ALL",37:"INNER",38:"JOIN",39:"ON",40:"LEFT",41:"RIGHT",42:"OUTER",43:"WHERE",44:"LIMIT",45:"SEPARATOR",46:"OFFSET",47:"ORDER",48:"BY",53:"DIRECTION",56:"ROW",57:"ROWS",58:"FETCH",59:"FIRST",60:"ONLY",61:"NEXT",64:"GROUP",66:"HAVING",67:"CASE",69:"END",70:"ELSE",71:"MATH",72:"MATH_MULTI",73:"OPERATOR",74:"BETWEEN",76:"CONDITIONAL",77:"SUB_SELECT_OP",79:"SUB_SELECT_UNARY_OP",81:"WHEN",82:"THEN",88:"NUMBER",89:"BOOLEAN",90:"PARAMETER",91:"STRING",92:"DBLSTRING",93:"LITERAL",94:"DOT",95:"FUNCTION",98:"STAR"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[9,1],[9,2],[9,2],[9,3],[8,2],[10,1],[10,2],[14,6],[14,5],[14,6],[14,4],[14,5],[14,5],[14,6],[17,2],[20,1],[20,2],[20,3],[20,3],[20,3],[20,4],[20,6],[7,1],[7,2],[33,2],[33,3],[21,1],[21,2],[36,5],[36,4],[36,5],[36,5],[36,6],[36,6],[36,6],[36,6],[15,2],[13,2],[13,4],[13,4],[11,3],[11,4],[49,1],[49,3],[51,1],[51,2],[50,2],[50,3],[54,2],[54,2],[55,4],[55,4],[12,1],[12,2],[62,3],[63,2],[24,4],[24,6],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[24,5],[24,3],[24,2],[24,1],[24,1],[68,1],[68,2],[80,4],[75,3],[78,3],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[28,1],[32,1],[86,1],[87,1],[83,1],[83,1],[25,1],[25,3],[84,4],[85,3],[85,4],[96,1],[96,2],[65,1],[65,3],[18,1],[18,3],[97,1],[97,1],[97,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = $$[$0-1];
break;
case 2: case 4: case 5: case 6: case 11: case 20: case 58: case 73: case 74: case 75: case 80: case 81: case 82: case 83: case 84: case 85: case 86:
this.$ = $$[$0];
break;
case 3:
this.$ = (function () {
        $$[$0-1].unions = $$[$0];
        return $$[$0-1];
      }());
break;
case 7:
this.$ = (function () {
        $$[$0-1].order = $$[$0];
        return $$[$0-1];
      }());
break;
case 8:
this.$ = (function () {
        $$[$0-1].group = $$[$0];
        return $$[$0-1];
      }());
break;
case 9:
this.$ = (function () {
        $$[$0-2].group = $$[$0-1];
        $$[$0-2].order = $$[$0];
        return $$[$0-2];
      }());
break;
case 10:
this.$ = (function () {
        $$[$0-1].limit = $$[$0];
        return $$[$0-1];
      }());
break;
case 12:
this.$ = (function () {
        $$[$0-1].where = $$[$0];
        return $$[$0-1];
      }());
break;
case 13:
this.$ = new yy.Select($$[$0-3], $$[$0-1], false, $$[$0], [], $$[$0-4]);
break;
case 14:
this.$ = new yy.Select($$[$0-2], $$[$0], false, [], [], $$[$0-3]);
break;
case 15:
this.$ = new yy.Select($$[$0-2], $$[$0], true, [], [], $$[$0-3]);
break;
case 16:
this.$ = new yy.Select($$[$0-2], $$[$0], false);
break;
case 17:
this.$ = new yy.Select($$[$0-2], $$[$0], true);
break;
case 18:
this.$ = new yy.Select($$[$0-3], $$[$0-1], false, $$[$0]);
break;
case 19:
this.$ = new yy.Select($$[$0-3], $$[$0-1], true, $$[$0]);
break;
case 21:
this.$ = new yy.Table($$[$0]);
break;
case 22:
this.$ = new yy.Table($$[$0-1], $$[$0]);
break;
case 23:
this.$ = new yy.Table($$[$0-2], $$[$0]);
break;
case 24: case 54: case 55: case 56: case 57: case 64:
this.$ = $$[$0-1];
break;
case 25: case 79:
this.$ = new yy.SubSelect($$[$0-1]);
break;
case 26:
this.$ = new yy.SubSelect($$[$0-2], $$[$0]);
break;
case 27:
this.$ = new yy.Table($$[$0-5], null, $$[$0-4], $$[$0-3], $$[$0-1]);
break;
case 28: case 32: case 48: case 100: case 102:
this.$ = [$$[$0]];
break;
case 29:
this.$ = $$[$0-1].concat($$[$01]);
break;
case 30:
this.$ = new yy.Union($$[$0]);
break;
case 31:
this.$ = new yy.Union($$[$0], true);
break;
case 33: case 76:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 34:
this.$ = new yy.Join($$[$0-2], $$[$0], '', 'INNER');
break;
case 35:
this.$ = new yy.Join($$[$0-2], $$[$0]);
break;
case 36:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT');
break;
case 37:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT');
break;
case 38:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT', 'INNER');
break;
case 39:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT', 'INNER');
break;
case 40:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT', 'OUTER');
break;
case 41:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT', 'OUTER');
break;
case 42:
this.$ = new yy.Where($$[$0]);
break;
case 43:
this.$ = new yy.Limit($$[$0]);
break;
case 44:
this.$ = new yy.Limit($$[$0], $$[$0-2]);
break;
case 45:
this.$ = new yy.Limit($$[$0-2], $$[$0]);
break;
case 46:
this.$ = new yy.Order($$[$0]);
break;
case 47:
this.$ = new yy.Order($$[$0-1], $$[$0]);
break;
case 49: case 101: case 103:
this.$ = $$[$0-2].concat($$[$0]);
break;
case 50:
this.$ = new yy.OrderArgument($$[$0], 'ASC');
break;
case 51:
this.$ = new yy.OrderArgument($$[$0-1], $$[$0]);
break;
case 52:
this.$ = new yy.Offset($$[$0]);
break;
case 53:
this.$ = new yy.Offset($$[$0-1], $$[$0]);
break;
case 59:
this.$ = (function () {
        $$[$0-1].having = $$[$0];
        return $$[$0-1];
      }());
break;
case 60:
this.$ = new yy.Group($$[$0]);
break;
case 61:
this.$ = new yy.Having($$[$0]);
break;
case 62:
this.$ = new yy.Case($$[$0-2], $$[$0-1]);
break;
case 63:
this.$ = new yy.Case($$[$0-4], $$[$0-3], $$[$0-1]);
break;
case 65: case 66: case 67: case 68: case 69: case 71:
this.$ = new yy.Op($$[$0-1], $$[$0-2], $$[$0]);
break;
case 70:
this.$ = new yy.Op($$[$0-3], $$[$0-4], $$[$0-1]);
break;
case 72:
this.$ = new yy.UnaryOp($$[$0-1], $$[$0]);
break;
case 77:
this.$ = [new yy.CaseBody($$[$0-2], $$[$0])];
break;
case 78:
this.$ = new yy.BetweenOp([$$[$0-2], $$[$0]]);
break;
case 87:
this.$ = new yy.ListValue($$[$0]);
break;
case 88:
this.$ = new yy.NumberValue($$[$0]);
break;
case 89:
this.$ = new yy.BooleanValue($$[$0]);
break;
case 90:
this.$ = new yy.ParameterValue($$[$0]);
break;
case 91:
this.$ = new yy.StringValue($$[$0], "'");
break;
case 92:
this.$ = new yy.StringValue($$[$0], '"');
break;
case 93:
this.$ = new yy.LiteralValue($$[$0]);
break;
case 94:
this.$ = new yy.LiteralValue($$[$0-2], $$[$0]);
break;
case 95:
this.$ = new yy.FunctionValue($$[$0-3], $$[$0-1]);
break;
case 96:
this.$ = new yy.FunctionValue($$[$0-2], null, true);
break;
case 97:
this.$ = new yy.FunctionValue($$[$0-3], $$[$0-1], true);
break;
case 98:
this.$ = new yy.ArgumentListValue($$[$0]);
break;
case 99:
this.$ = new yy.ArgumentListValue($$[$0], true);
break;
case 104:
this.$ = new yy.Star();
break;
case 105:
this.$ = new yy.Field($$[$0]);
break;
case 106:
this.$ = new yy.Field($$[$0-2], $$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:5,10:6,14:7,16:$V0},{1:[3]},{5:[1,9]},o($V1,[2,2],{7:10,13:11,33:12,34:$V2,44:$V3}),o($V4,[2,4]),o($V4,[2,5]),o($V4,[2,6],{11:15,12:16,62:18,47:$V5,64:[1,19]}),o($V6,[2,11],{15:20,43:[1,21]}),{17:22,18:24,22:[1,23],23:$V7,24:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{1:[2,1]},o($V1,[2,3],{33:48,34:$V2}),o($V4,[2,10]),o($Vj,[2,28]),{32:49,88:$Vb},{6:50,8:4,9:5,10:6,14:7,16:$V0,35:[1,51]},o($V4,[2,7]),o($V4,[2,8],{11:52,47:$V5}),{48:[1,53]},o($Vk,[2,58],{63:54,66:[1,55]}),{48:[1,56]},o($V6,[2,12]),{24:57,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{18:58,24:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{17:59,18:60,23:$V7,24:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{19:[1,61],45:$Vl},{24:63,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vm,[2,102]),o($Vm,[2,104]),o($Vm,[2,105],{26:[1,64],71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{24:70,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{4:72,6:3,8:4,9:5,10:6,14:7,16:$V0,24:71,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,74],{77:[1,73]}),{27:[1,75],78:74},o($Vs,[2,73]),o([5,19,26,29,34,37,38,40,41,43,44,45,46,47,53,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,95,98],[2,80],{27:[1,77],94:$Vt}),o($Vu,[2,81]),o($Vu,[2,82]),o($Vu,[2,83]),o($Vu,[2,84]),o($Vu,[2,85]),o($Vu,[2,86]),o($Vv,[2,93]),o([5,19,26,27,29,34,37,38,40,41,43,44,45,46,47,53,56,57,64,66,67,69,70,71,72,73,74,76,77,79,81,82,88,89,90,91,92,93,95,98],[2,88]),o($Vu,[2,91]),o($Vu,[2,92]),{27:[1,78]},o($Vu,[2,89]),o($Vu,[2,90]),o($Vj,[2,29]),o($V4,[2,43],{45:[1,79],46:[1,80]}),o($Vj,[2,30],{13:11,44:$V3}),{6:81,8:4,9:5,10:6,14:7,16:$V0},o($V4,[2,9]),{25:34,32:35,49:82,51:83,52:84,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vk,[2,59]),{24:85,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:87,25:34,27:$V8,32:35,52:31,65:86,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($V6,[2,42],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{19:[1,88],45:$Vl},{18:89,24:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:26,98:$Vi},{19:[1,90],45:$Vl},{20:91,25:92,27:$Vw,93:$Vg},{24:28,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,97:94,98:$Vi},o([27,67,79,88,89,90,91,92,93,95,98],[2,20],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{25:95,93:$Vg},{24:96,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:97,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:98,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:100,25:34,27:$V8,32:35,52:31,67:$V9,75:99,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:101,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{68:102,71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr,80:103,81:$Vx},{29:[1,105],71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr},{29:[1,106]},{27:[1,107],78:108},o($Vs,[2,72]),{4:72,6:3,8:4,9:5,10:6,14:7,16:$V0},{93:[1,109]},{22:$Vy,24:87,25:34,27:$V8,29:[1,110],32:35,52:31,65:112,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,96:111},{22:$Vy,24:87,25:34,27:$V8,32:35,52:31,65:112,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh,96:114},{32:115,88:$Vb},{32:116,88:$Vb},o($Vj,[2,31],{13:11,44:$V3}),o($V4,[2,46],{50:117,45:[1,118],46:[1,119]}),o($Vz,[2,48]),o($Vz,[2,50],{53:[1,120]}),o($Vk,[2,61],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o([5,29,34,44,47,66],[2,60],{45:$VA}),o($VB,[2,100],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{20:122,25:92,27:$Vw,93:$Vg},{19:[1,123],45:$Vl},{20:124,25:92,27:$Vw,93:$Vg},o($VC,[2,16],{21:125,36:126,37:$VD,38:$VE,40:$VF,41:$VG}),o($VH,[2,21],{25:131,26:[1,132],30:[1,133],93:$Vg,94:$Vt}),{4:135,6:3,8:4,9:5,10:6,14:7,16:$V0,24:87,25:34,27:$V8,28:134,32:35,52:31,65:136,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vm,[2,103]),o($Vm,[2,106],{94:$Vt}),o([5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,71,73,76,79,81,82,88,89,90,91,92,93,95,98],[2,65],{72:$Vo,74:$Vq}),o([5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,71,72,73,76,79,81,82,88,89,90,91,92,93,95,98],[2,66],{74:$Vq}),o([5,19,26,27,29,34,37,38,40,41,43,44,45,47,64,66,67,69,70,73,76,79,81,82,88,89,90,91,92,93,95,98],[2,67],{71:$Vn,72:$Vo,74:$Vq}),o($Vs,[2,68]),{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:[1,137]},o($VI,[2,69],{71:$Vn,72:$Vo,73:$Vp,74:$Vq}),{69:[1,138],70:[1,139],80:140,81:$Vx},o($VJ,[2,75]),{24:141,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,64]),o($Vs,[2,79]),{4:72,6:3,8:4,9:5,10:6,14:7,16:$V0,24:87,25:34,27:$V8,28:142,32:35,52:31,65:136,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,71]),o($Vv,[2,94]),o($Vu,[2,96]),{29:[1,143]},{29:[2,98],45:$VA},{24:87,25:34,27:$V8,32:35,52:31,65:144,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{29:[1,145]},o($V4,[2,44]),o($V4,[2,45]),o($V4,[2,47]),{25:34,32:35,51:146,52:84,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{32:148,54:147,88:$Vb},o($Vz,[2,51]),{24:149,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VC,[2,14],{36:126,21:150,37:$VD,38:$VE,40:$VF,41:$VG}),{20:151,25:92,27:$Vw,93:$Vg},o($VC,[2,17],{36:126,21:152,37:$VD,38:$VE,40:$VF,41:$VG}),o($VC,[2,18],{36:153,37:$VD,38:$VE,40:$VF,41:$VG}),o($VK,[2,32]),{38:[1,154]},{20:155,25:92,27:$Vw,93:$Vg},{37:[1,157],38:[1,156],42:[1,158]},{37:[1,160],38:[1,159],42:[1,161]},o($VH,[2,22],{94:$Vt}),{25:162,93:$Vg},{31:[1,163]},{29:[1,164]},{29:[1,165]},{29:[2,87],45:$VA},{24:166,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,62]),{24:167,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VJ,[2,76]),{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr,82:[1,168]},{29:[1,169]},o($Vu,[2,97]),{29:[2,99],45:$VA},o($Vu,[2,95]),o($Vz,[2,49]),o($V4,[2,52],{55:170,58:[1,171]}),{56:[1,172],57:[1,173]},o($VB,[2,101],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VC,[2,13],{36:153,37:$VD,38:$VE,40:$VF,41:$VG}),o($VC,[2,15]),o($VC,[2,19],{36:153,37:$VD,38:$VE,40:$VF,41:$VG}),o($VK,[2,33]),{20:174,25:92,27:$Vw,93:$Vg},{39:[1,175]},{20:176,25:92,27:$Vw,93:$Vg},{38:[1,177]},{38:[1,178]},{20:179,25:92,27:$Vw,93:$Vg},{38:[1,180]},{38:[1,181]},o($VH,[2,23],{94:$Vt}),{27:[1,182]},o($VH,[2,24]),o($VH,[2,25],{25:183,93:$Vg}),o($VI,[2,78],{71:$Vn,72:$Vo,73:$Vp,74:$Vq}),{69:[1,184],71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr},{24:185,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($Vs,[2,70]),o($V4,[2,53]),{59:[1,186],61:[1,187]},o($VL,[2,54]),o($VL,[2,55]),{39:[1,188]},{24:189,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{39:[1,190]},{20:191,25:92,27:$Vw,93:$Vg},{20:192,25:92,27:$Vw,93:$Vg},{39:[1,193]},{20:194,25:92,27:$Vw,93:$Vg},{20:195,25:92,27:$Vw,93:$Vg},{32:196,88:$Vb},o($VH,[2,26],{94:$Vt}),o($Vs,[2,63]),o($VJ,[2,77],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{32:148,54:197,88:$Vb},{32:148,54:198,88:$Vb},{24:199,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VK,[2,35],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{24:200,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{39:[1,201]},{39:[1,202]},{24:203,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{39:[1,204]},{39:[1,205]},{29:[1,206]},{60:[1,207]},{60:[1,208]},o($VK,[2,34],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VK,[2,36],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{24:209,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:210,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VK,[2,37],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),{24:211,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},{24:212,25:34,27:$V8,32:35,52:31,67:$V9,78:33,79:$Va,83:36,84:37,85:38,86:39,87:40,88:$Vb,89:$Vc,90:$Vd,91:$Ve,92:$Vf,93:$Vg,95:$Vh},o($VH,[2,27]),o($V4,[2,56]),o($V4,[2,57]),o($VK,[2,38],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VK,[2,40],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VK,[2,39],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr}),o($VK,[2,41],{71:$Vn,72:$Vo,73:$Vp,74:$Vq,76:$Vr})],
defaultActions: {9:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}