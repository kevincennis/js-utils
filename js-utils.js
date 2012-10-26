/* Strings */

// python-style string formatting
String.prototype.format = function(){
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, i) {
    if (m == "{{") return "{";
    if (m == "}}") return "}";
    return args[i];
  });
};

// reverse a string
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}

/* Numbers */

// determine whether a number fits inside a given range
Number.prototype.between = function(min, max, exclusive){
  if ( exclusive ) return this > min && this < max;
  return this >= min && this <= max;
};

// constrain a number to fit inside a given range
Number.prototype.squeeze = function(min, max){
  return this < min ? min : this > max ? max : this;    
};

/* Arrays */

// find the maximum value in an array
Array.prototype.max = function(){
  return Math.max.apply(Math, this);
};

// find the minimum value in an array
Array.prototype.min = function(){
  return Math.min.apply(Math, this);
};

// sum the values in an array
Array.prototype.sum = function(){
  var result = i = 0;
  for ( ; i < this.length; i++ )
    result += this[i];
  return result;
};

/* Math */

// supply an option base to Math.log
Math.log = (function(){
  var func = Math.log;
  return function(val, base){
    if ( typeof base !== 'number' ) return func(val);
    return func(val) / func(base);
  };
}());
