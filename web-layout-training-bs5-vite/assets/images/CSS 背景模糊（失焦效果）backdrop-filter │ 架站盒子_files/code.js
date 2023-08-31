var string = document.getElementsByTagName('code');

for (var i = 0; i < string.length; ++i) {

	// green
	string[i].innerHTML = string[i].innerHTML.replace(/\"/g,     '<text class ="code_green">&quot;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\'/g,     '<text class ="code_green">&apos;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/:/g,      '<text class ="code_green">:</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/#/g,      '<text class ="code_green">#</text>');

	// purple
	string[i].innerHTML = string[i].innerHTML.replace(/header/g,    '<text class ="code_purple">header</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/elseif/g,    '<text class ="code_purple">elseif</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/if/g,    '<text class ="code_purple">if</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/else/g,    '<text class ="code_purple">else</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/div class/g,    'div <text class ="code_purple">class</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/span class/g,    'span <text class ="code_purple">class</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/p class/g,    'p <text class ="code_purple">class</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/ class /g,    '<text class ="code_purple"> class </text>');
	string[i].innerHTML = string[i].innerHTML.replace(/type/g,    '<text class ="code_purple">type</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/function/g,'<text class ="code_purple">function</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/switch/g,'<text class ="code_purple">switch</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/case /g,'<text class ="code_purple">case </text>');
	string[i].innerHTML = string[i].innerHTML.replace(/default/g,'<text class ="code_purple">default</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/break/g,'<text class ="code_purple">break</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/ id/g,     '<text class ="code_purple"> id</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/value=/g,   '<text class ="code_purple">value</text>=');
	string[i].innerHTML = string[i].innerHTML.replace(/max/g,     '<text class ="code_purple">max</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/min/g,     '<text class ="code_purple">min</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/step/g,    '<text class ="code_purple">step</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/var/g,     '<text class ="code_purple">var</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/for/g,     '<text class ="code_purple">for</text>');	
	string[i].innerHTML = string[i].innerHTML.replace(/src/g,     '<text class ="code_purple">src</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/href=/g,    '<text class ="code_purple">href</text>=');
	string[i].innerHTML = string[i].innerHTML.replace(/ rel=/g,   '<text class ="code_purple"> rel</text>=');
	string[i].innerHTML = string[i].innerHTML.replace(/px;/g,     '<text class ="code_purple">px;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/px /g,     '<text class ="code_purple">px </text>');
	string[i].innerHTML = string[i].innerHTML.replace(/em;/g,     '<text class ="code_purple">em;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/Math/g,     '<text class ="code_purple">Math</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/return/g,     '<text class ="code_purple">return</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/crossorigin/g,'<text class ="code_purple">crossorigin</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/placeholder/g,'<text class ="code_purple">placeholder</text>');

	// orange
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;html&gt;/g,     '&lt;<text class ="code_orange">html</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;html /g,     '&lt;<text class ="code_orange">html </text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/html&gt;/g,     '&lt;<text class ="code_orange">/html</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;head&gt;/g,     '&lt;<text class ="code_orange">head</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;head/g,     '&lt;<text class ="code_orange">head</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/head&gt;/g,     '&lt;<text class ="code_orange">/head</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;meta/g,    '&lt;<text class ="code_orange">meta</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;link/g,    '&lt;<text class ="code_orange">link</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;body&gt;/g,     '&lt;<text class ="code_orange">body</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;body/g,     '&lt;<text class ="code_orange">body</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/body&gt;/g,     '&lt;<text class ="code_orange">/body</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;div&gt;/g,     '&lt;<text class ="code_orange">div</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;div/g,     '&lt;<text class ="code_orange">div</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/div&gt;/g,     '&lt;<text class ="code_orange">/div</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;input/g,   '&lt;<text class ="code_orange">input</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;select&gt;/g,     '&lt;<text class ="code_orange">select</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;select/g,     '&lt;<text class ="code_orange">select</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/select&gt;/g,     '&lt;<text class ="code_orange">/select</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;option&gt;/g,     '&lt;<text class ="code_orange">option</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;option/g,     '&lt;<text class ="code_orange">option</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/option&gt;/g,     '&lt;<text class ="code_orange">/option</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;button&gt;/g,     '&lt;<text class ="code_orange">button</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;button/g,     '&lt;<text class ="code_orange">button</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/button&gt;/g,     '&lt;<text class ="code_orange">/button</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;textarea&gt;/g,     '&lt;<text class ="code_orange">textarea</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;textarea/g,     '&lt;<text class ="code_orange">textarea</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/textarea&gt;/g,     '&lt;<text class ="code_orange">/textarea</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/this/g,    '<text class ="code_orange">this</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/span/g,    '<text class ="code_orange">span</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;span&gt;/g,     '&lt;<text class ="code_orange">span</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;span/g,     '&lt;<text class ="code_orange">span</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/span&gt;/g,     '&lt;<text class ="code_orange">/span</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;label&gt;/g,     '&lt;<text class ="code_orange">label</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;label/g,     '&lt;<text class ="code_orange">label</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/label&gt;/g,     '&lt;<text class ="code_orange">/label</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/true/g,    '<text class ="code_orange">true</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/false/g,    '<text class ="code_orange">false</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\=\=/g,    '<text class ="code_orange">==</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/ \= /g,    '<text class ="code_orange"> = </text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\+/g,    '<text class ="code_orange">+</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\-/g,    '<text class ="code_orange">-</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;title&gt;/g,     '&lt;<text class ="code_orange">title</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;title/g,     '&lt;<text class ="code_orange">title</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/title&gt;/g,     '&lt;<text class ="code_orange">/title</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;p&gt;/g,     '&lt;<text class ="code_orange">p</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;p/g,     '&lt;<text class ="code_orange">p</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/p&gt;/g,     '&lt;<text class ="code_orange">/p</text>&gt;');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;script&gt;/g,  '<text class ="code_orange">&lt;script&gt;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/script&gt;/g,'<text class ="code_orange">&lt;/script&gt;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;style&gt;/g,   '<text class ="code_orange">&lt;style&gt;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\/style&gt;/g, '<text class ="code_orange">&lt;/style&gt;</text>');

	// blue
	string[i].innerHTML = string[i].innerHTML.replace(/\.removeAttr/g,     '<text class ="code_blue">.removeAttr</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/getElementById/g,'<text class ="code_blue">getElementById</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/getRandomInt/g,'<text class ="code_blue">getRandomInt</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/getElementsClassName/g,'<text class ="code_blue">getElementsClassName</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/getElementsByTagName/g,'<text class ="code_blue">getElementsByTagName</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.offset/g,     '<text class ="code_blue">.offset</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.top/g,     '<text class ="code_blue">.top</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.bottom/g,     '<text class ="code_blue">.bottom</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.left/g,     '<text class ="code_blue">.left</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.right/g,     '<text class ="code_blue">.right</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/location\./g,   '<text class ="code_blue">location.</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/onclick/g,   '<text class ="code_blue">onclick</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/onchange/g,   '<text class ="code_blue">onchange</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/change/g,   '<text class ="code_blue">change</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/each/g,   '<text class ="code_blue">each</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/onblur/g,   '<text class ="code_blue">onblur</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/floor/g,    '<text class ="code_blue">floor</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/random/g,    '<text class ="code_blue">random</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/console\.log/g,  '<text class ="code_blue">console.log</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/document/g,      '<text class ="code_blue">document</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/window/g,'<text class ="code_blue">window</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.scrollTop/g,'<text class ="code_blue">.scrollTop</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.scroll/g,'<text class ="code_blue">.scroll</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.ceil/g,'<text class ="code_blue">.ceil</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/isset/g,    '<text class ="code_blue">isset</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/echo/g,    '<text class ="code_blue">echo</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/exit\(\);/g,    '<text class ="code_blue">exit();</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.html/g,   '<text class ="code_blue">.html</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.value/g,    '<text class ="code_blue">.value</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.val/g,    '<text class ="code_blue">.val</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.on/g,     '<text class ="code_blue">.on</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\.attr/g,     '<text class ="code_blue">.attr</text>');

	// white
	string[i].innerHTML = string[i].innerHTML.replace(/\(/g,         '<text class ="code_white">(</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\)/g,         '<text class ="code_white">)</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\{/g,         '<text class ="code_white">{</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\}/g,         '<text class ="code_white">}</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\,/g,         '<text class ="code_white">,</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\(/g,         '<text class ="code_white">(</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;\?php/g,'<text class ="code_white">&lt;?php</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\?/g,'<text class ="code_white">?</text>');

	// last
	string[i].innerHTML = string[i].innerHTML.replace(/\./g,       '<text class ="code_green">.</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/\$/g,       '<text class ="code_green">$</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&lt;/g,       '<text class ="code_green">&lt;</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/&gt;/g,       '<text class ="code_green">&gt;</text>');

	string[i].innerHTML = string[i].innerHTML.replace(/\[0\]/g,       '<text class ="code_gold">[0]</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/1/g,       '<text class ="code_gold">1</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/2/g,       '<text class ="code_gold">2</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/3/g,       '<text class ="code_gold">3</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/4/g,       '<text class ="code_gold">4</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/5/g,       '<text class ="code_gold">5</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/6/g,       '<text class ="code_gold">6</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/7/g,       '<text class ="code_gold">7</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/8/g,       '<text class ="code_gold">8</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/9/g,       '<text class ="code_gold">9</text>');
	string[i].innerHTML = string[i].innerHTML.replace(/0/g,       '<text class ="code_gold">0</text>');

	// if(str.startsWith("")) {
	// string[i].innerHTML = string[i].innerHTML.replace(/\/\//g,       '<text class ="code_gray">//</text>');
	// }
	

}

$(".code_green").css("color","#4FABB4");
$(".code_orange").css("color","#D46066");
$(".code_purple").css("color","#C695B4");
$(".code_blue").css("color","#6699CC");
$(".code_white").css("color","#fff");
$(".code_gold").css("color","#ffd700");
$(".code_gray").css("color","#999");