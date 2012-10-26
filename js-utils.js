String.prototype.format = function(){
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, i) {
    if (m == "{{") return "{";
    if (m == "}}") return "}";
    return args[i];
  });
};

Number.prototype.between = function(min, max, exclusive){
  if ( exclusive ) return this > min && this < max;
  return this >= min && this <= max;
}

Number.prototype.squeeze = function(min, max){
  return this < min ? min : this > max ? max : this;    
}
