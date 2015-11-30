function Dickbutt(copy) {
  this.copy = copy.split("");
}

Dickbutt.charmap = [
  "                                                                                        ",
  "                                                                                        ",
  "                                      ..',;;,..                                         ",
  "                                  .:d0XWWNNNNWNKx:.                                     ",
  "                              .;d0NNX0d:,...';o0NWNO:.                                  ",
  "                      .....:d0NN0x:'.           'kWMWXd.                                ",
  "                   'oOKNNNWMMWx'                  lNMMMK.                               ",
  "                 .oNMMMMWMMW0XK;                   :XMMNc                               ",
  "                 :NMMMMMMWMX;cN0.                   :XMWd                               ",
  "                 oWWMMMMWNO; ,NNl;;    'oO0K0Oxl,.  .kWWx                               ",
  "                 cWMMMMMWkc:l0WMWNk. .dNMMMMMWNONKo. oNWd                               ",
  "                 ;NWX0XNNWMMWNKkc.  .kWMMMMMMMNclNWO'xWWo                               ",
  "                .OWK'  .dWMWKc;k0c  cNMMMMMMMMK,.OWKcKWNc                               ",
  "               '0WWk,...,dO00000Oo. dWMMMMNKOl. .xKclNMN,                               ",
  "              :XWWWMMWNX0Oxoc;'..   .oKNMWXOdllokO,.0MM0.                               ",
  "             :XMXc';:ldxOKKXNWWNX0kdc;;;:cldkkdo,  lNMWd                                ",
  "            ;XMNc          ..';:ldxO0KXK0Oxl'     .KMMN,                                ",
  "           ,KMNo                      ...',,.     dWMWk.                                ",
  "          '0MWx.                                 ,XMMX,                                 ",
  "         '0WWx.                                 .OWMWo                                  ",
  "        .OWWk.                                  cNMWO.                                  ",
  "        lNMX'                      .;l.        'KMWO.                                   ",
  "        oNWk                      .xWX' cxc   .kWWO.                                    ",
  "        oWNl                      ,XWx.;NMK.  lNM0.                         'oOO0Od;.   ",
  "       .dWN:                      dWK,.OWNl  'KMX;                        ;OWNl..cXWO.  ",
  "       .dWX,                     .KNo.lWWx. .OWWd                       ;OWWO,    lNN;  ",
  "       .xWX.                     :N0.'KWO.  oWMX'                     'kWWKc.    .ONx.  ",
  "       .dWX.                    .kX:.OWK'  .KMWx.                   .oXWXl.     .kNd.   ",
  "       .dWX'                    ;Xx.xWX;   'XMNxcokO0KKXKK0kd:.   .lKWKl.     .cKXc     ",
  "        oWN;                   .kK,dNNc    'XMMNKOdddolloxOXWMNO::KWKc.      :0WO'      ",
  "        lNNc                   :Xl;XNo     .KW0'   '0Kx.   .'lKWWW0:.      ;OWNd.       ",
  "        :NWx                  ,0O.:NO.      ...   .'oXNxcc:;';OXk;.      ;ONWX:         ",
  "        .KMK.               ,d0k' .xKo.         ;OXNNWWWMMMWWWW0:.     ;OWMWO'          ",
  "         oWWl             ,xo,.  ':.:KO.         .,,,,,,;:cdOXWMWKl.   :kXWW0c.         ",
  "         'KMK'            lK0KO,'KWKlOK,                     .,xNWMK;    .':ld0Ko.      ",
  "          oWW0.            ..oXKKNdckx,              ,O0'       'OWMXl  .'.. .dNK;      ",
  "          .OWW0'              'll'                   ;od'        .0WMX,  ,xKXKd;.       ",
  "           .kWWXc                                .;'              cNMWl    ;0Xc         ",
  "            .:0WWO;.                            'KNx              ,XMNc     .KN;        ",
  "               ;kWWXd,                          .c:.              lNMWkc;,';dNK'        ",
  "     .,.        ,XWWWWKd;.                       oKk.           .cXWKkOKKKKK0d'         ",
  "    .0XOkc.    lXNk'.oNMWNKxl;..                  ...         'oKN0c.    .              ",
  "    .XO.:0Ko..kWK: .lKKl;oONWWWNX0kdl;'.           'Ox.    .cONNk;                      ",
  "    .kX; .lKKNNd..:0Xo.    .';lx0XNWWWWXx. 'ccc:;,'':c..,lONN0o.                        ",
  "     ;NO.  .od'.;0Xd.         .....'xWMXl .0WXKXNWNNNXXNNXOo,                           ",
  "      lXd.   .c0Xx'         .xXNNX00NWK, .dN0' ..';:llc:..                              ",
  "       cKx',xXNx,           .OWW00NWNk'  cNK,                                           ",
  "        'kNWNx'              lNM0'.'.   ,KN:                                            ",
  "          ':.                .kWWx.    '0Nl                                             ",
  "                              .xWWd.  'KNl                                              ",
  "                               .lXW0odXXc                                               ",
  "                                 .xNWNk.                                                ",
  "                                   .'.                                                  ",
  "                                                                                        "
];

Dickbutt.prototype.char = 0;
Dickbutt.prototype.color = 0;
Dickbutt.prototype.row = 14;
Dickbutt.prototype.col = 7;
Dickbutt.prototype.font = "12px monospace";

Dickbutt.prototype.renderText = function() {
  var self = this;
  self.loop(self.parse);
  $("article").eq(0).find("pre").text(self.db_array.join(""));
}

Dickbutt.prototype.renderImage = function() {
  var self = this,
      $img = $("<img />");
  self.loop(self.parse);
  self.createCanvas().setColor(color).drawImageUsing(self.db_array);
  $img.attr("src", self.canvas.toDataURL());
  $("article").eq(1).append($img);
}

Dickbutt.prototype.loop = function(fn) {
  var mapped_db = [],
      self = this;
  if (self.db_array) { return; }
  $.each(Dickbutt.charmap, function(i, line) {
    mapped_db.push($.map(line.split(""), $.proxy(fn, self)).join("") + "\n");
  });

  self.db_array = mapped_db;
}

Dickbutt.prototype.parse = function(char) {
  return /\S/.test(char) ? this.nextChar() : char;
}

Dickbutt.prototype.nextChar = function() {
  var c;
  this.checkPosition();
  c = this.copy[this.char];
  this.char++;
  return /\S/.test(c) ? c : this.nextChar();
}

Dickbutt.prototype.checkPosition = function() {
  if (this.char === this.copy.length) { this.char = 0; }
}

Dickbutt.prototype.createCanvas = function() {
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.col * this.db_array[0].length;
  this.canvas.height = Dickbutt.charmap.length * this.row;
  this.ctx = this.canvas.getContext("2d");
  this.ctx.font = this.font;
  return this;
}

Dickbutt.prototype.setColor = function(color) {
  this.ctx.fillStyle = color || "black";
  return this;
}

Dickbutt.prototype.nextColor = function() {
  var c;
  // More intention-revealing than the shift/push method of cycling
  this.color++;
  if (this.color === colors.collection.length) { this.color = 0; }
  this.setColor(colors.collection[this.color]);
}

Dickbutt.prototype.drawImageUsing = function(db_array) {
  var self = this,
      r = self.row,
      c = self.col;
  $.each(db_array, function(y, line) {
    $.each(line.split(""), function(x, char) {
      self.nextColor();
      self.ctx.fillText(char, x * c, y * r);
    });
  });
  return this;
}

var colors = {
  collection: [],
  format: function(color) {
    color = color.replace(/#/g, "");
    if (color.length !== 3 && color.length !== 6) {
      color = undefined;
    }
    return color ? "#" + color : color;
  },
  add: function(color) {
    color = this.format(color);
    if (!color || $.inArray(this.collection, color) !== -1) { return; }
    color && this.collection.push(color);
    return color;
  },
  remove: function(color) {
    colors.collection = $.map(colors.collection, function(c) {
      return c !== color ? c : null;
    });
  }
};

$(function() {
  var $f = $("form"),
      $c = $f.find("#color"),
      $ul = $f.find("ul"),
      roygbiv = ["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#ee82ee"];

  var tmpl = (function() {
    var html = $("[type='text/template']").html();

    return function(c) {
      var $li = $(html);
      $li.find("a").text(c);
      return $li;
    }
  })();

  $f.on("submit", function(e) {
    e.preventDefault();

    var copy = $f.find("textarea").val(),
        dickbutt;

    if (!copy) { return; }
    if ($c.val()) { colors.add($c.val()); }

    $("article").eq(1).find("img").remove();
    dickbutt = new Dickbutt(copy);
    dickbutt.renderText();
    dickbutt.renderImage();
  });

  $c.on("keydown", function(e) {
    if (e.which !== 13) { return; }

    var added = colors.add($c.val());
    $c.val("");

    if (added) { $ul.append(tmpl(added)); }
    return false;
  });

  $f.find("button").on("click", function() {
    var added = colors.add($c.val());
    $c.val("");

    if (added) { $ul.append(tmpl(added)); }
  });

  $ul.on("click", "a", function(e) {
    e.preventDefault();

    var $e = $(e.target),
        color = $e.text();
    $e.closest("li").remove();
    colors.remove(color);
  });

  $("#rainbow").on("click", function(e) {
    e.preventDefault();

    colors.collection = [];
    roygbiv.forEach(function(color) {
      colors.add(color);
      $ul.append(tmpl(color));
    });
  });
});
