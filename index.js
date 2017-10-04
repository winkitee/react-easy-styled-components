'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n          @media (max-width: ', 'em) {\n            ', '\n          }\n        '], ['\n          @media (max-width: ', 'em) {\n            ', '\n          }\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      ', '\n    '], ['\n      ', '\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      display: ', ';\n    '], ['\n      display: ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      text-align: ', ';\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      text-align: ', ';\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['', ';'], ['', ';']),
    _templateObject8 = _taggedTemplateLiteral(['display: flex;'], ['display: flex;']),
    _templateObject9 = _taggedTemplateLiteral(['display: none;'], ['display: none;']),
    _templateObject10 = _taggedTemplateLiteral(['\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n      ', '\n      flex-wrap: wrap;\n      flex-direction: ', ';\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      ', '\n      flex-wrap: wrap;\n      flex-direction: ', ';\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']),
    _templateObject12 = _taggedTemplateLiteral(['\n      ', '\n      flex: ', ';\n      flex-direction: ', ';\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      ', '\n      flex: ', ';\n      flex-direction: ', ';\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']),
    _templateObject13 = _taggedTemplateLiteral(['\n      ', '\n\n      ', '\n\n      word-wrap: break-word;\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      ', '\n\n      ', '\n\n      word-wrap: break-word;\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']),
    _templateObject14 = _taggedTemplateLiteral(['\n      ', '\n      position: absolute;\n      ', '\n      ', '\n      ', '\n      ', '\n\n      ', '\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    '], ['\n      ', '\n      position: absolute;\n      ', '\n      ', '\n      ', '\n      ', '\n\n      ', '\n\n      ', '\n      ', '\n      ', '\n      ', '\n      ', '\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 KIM SEUNG YEON.
                                                                                                                                                           * manbo91@naver.com
                                                                                                                                                           * https://github.com/manbo91/react-easy-styled-components
                                                                                                                                                          */

var ReactEasyStyledComponents = function ReactEasyStyledComponents(sizes) {
  var _this = this;

  _classCallCheck(this, ReactEasyStyledComponents);

  this.media = function () {
    var sizesObj = sizes;
    if (!sizesObj) {
      // default sizes
      sizesObj = {
        desktop: 992,
        tablet: 768,
        phone: 376
      };
    }

    return Object.keys(sizesObj).reduce(function (acc, label) {
      acc[label] = function () {
        return (0, _styledComponents.css)(_templateObject, sizesObj[label] / 16, _styledComponents.css.apply(undefined, arguments));
      };

      return acc;
    }, {});
  };

  this.button = function () {
    return (0, _styledComponents.css)(_templateObject2, function (props) {
      return props.button && '\n        &:hover {\n          cursor: pointer;\n          opacity: 0.5;\n          transition: all 200ms ease-out;\n        }\n      ';
    });
  };

  this.customize = function () {
    return (0, _styledComponents.css)(_templateObject2, function (props) {
      return props.customize && props.customize;
    });
  };

  this.display = function () {
    return (0, _styledComponents.css)(_templateObject3, function (props) {
      return props.display || 'flex';
    });
  };

  this.viewBaseProps = function () {
    return (0, _styledComponents.css)(_templateObject4, function (props) {
      return props.backColor && 'background-color: ' + props.backColor + ';';
    }, function (props) {
      return props.width && 'width: ' + props.width + ';';
    }, function (props) {
      return props.height && 'height: ' + props.height + ';';
    }, function (props) {
      return props.margin && 'margin: ' + props.margin + ';';
    }, function (props) {
      return props.marginTop && 'margin-top: ' + props.marginTop + ';';
    }, function (props) {
      return props.marginLeft && 'margin-left: ' + props.marginLeft + ';';
    }, function (props) {
      return props.marginRight && 'margin-right: ' + props.marginRight + ';';
    }, function (props) {
      return props.marginBottom && 'margin-bottom: ' + props.marginBottom + ';';
    }, function (props) {
      return props.padding && 'padding: ' + props.padding + ';';
    }, function (props) {
      return props.paddingTop && 'padding-top: ' + props.paddingTop + ';';
    }, function (props) {
      return props.paddingLeft && 'padding-left: ' + props.paddingLeft + ';';
    }, function (props) {
      return props.paddingRight && 'padding-right: ' + props.paddingRight + ';';
    }, function (props) {
      return props.paddingBottom && 'padding-bottom: ' + props.paddingBottom + ';';
    }, function (props) {
      return props.border && 'border: ' + props.border + ';';
    }, function (props) {
      return props.borderTop && 'border-top: ' + props.borderTop + ';';
    }, function (props) {
      return props.borderBottom && 'border-bottom: ' + props.borderBottom + ';';
    }, function (props) {
      return props.borderLeft && 'border-left: ' + props.borderLeft + ';';
    }, function (props) {
      return props.borderRight && 'border-right: ' + props.borderRight + ';';
    }, function (props) {
      return props.zIndex && 'z-index: ' + props.zIndex + ';';
    }, function (props) {
      return props.backgroundImage && '\n        background-image: ' + props.backgroundImage + ';\n        background-repeat:no-repeat;\n        background-size: cover;\n        background-position: center;\n      ';
    });
  };

  this.textBaseProps = function () {
    return (0, _styledComponents.css)(_templateObject5, function (props) {
      return props.textAlign || 'center';
    }, function (props) {
      return props.size && 'font-size: ' + props.size + ';';
    }, function (props) {
      return props.color && 'color: ' + props.color + ';';
    }, function (props) {
      return props.weight && 'font-weight: ' + props.weight + ';';
    }, function (props) {
      return !props.margin && props.theme.textMargin && 'margin: ' + props.theme.textMargin + ';';
    }, function (props) {
      return !props.padding && props.theme.textPadding && 'padding: ' + props.theme.textPadding + ';';
    }, function (props) {
      return !props.size && props.theme.fontSize && 'font-size: ' + props.theme.fontSize + ';';
    }, function (props) {
      return !props.color && props.theme.fontColor && 'color: ' + props.theme.fontColor + ';';
    }, function (props) {
      return !props.weight && props.theme.fontWeight && 'font-weight: ' + props.theme.fontWeight + ';';
    });
  };

  this.mediaProps = function () {
    return (0, _styledComponents.css)(_templateObject6, function (props) {
      return props.desktop && _this.media().desktop(_templateObject7, props.desktop);
    }, function (props) {
      return props.tablet && _this.media().tablet(_templateObject7, props.tablet);
    }, function (props) {
      return props.phone && _this.media().phone(_templateObject7, props.phone);
    }, function (props) {
      return props.desktopShow && _this.media().desktop(_templateObject8);
    }, function (props) {
      return props.desktopHide && _this.media().desktop(_templateObject9);
    }, function (props) {
      return props.tabletShow && _this.media().tablet(_templateObject8);
    }, function (props) {
      return props.tabletHide && _this.media().tablet(_templateObject9);
    }, function (props) {
      return props.phoneShow && _this.media().phone(_templateObject8);
    }, function (props) {
      return props.phoneHide && _this.media().phone(_templateObject9);
    });
  };

  this.optionProps = function () {
    return (0, _styledComponents.css)(_templateObject10, function (props) {
      return props.opacity && 'opacity: ' + props.opacity + ';';
    }, function (props) {
      return props.animation && 'animation: ' + props.animation + ';';
    });
  };

  this.FlexView = _styledComponents2.default.div(_templateObject11, this.display, function (props) {
    return props.row ? 'row' : 'column';
  }, this.button, this.customize, this.viewBaseProps, this.optionProps, this.mediaProps);

  this.View = _styledComponents2.default.div(_templateObject12, this.display, function (props) {
    return props.flex || '1';
  }, function (props) {
    return props.row ? 'row' : 'column';
  }, function (props) {
    return props.alignEnd && 'align-items: flex-end;';
  }, function (props) {
    return props.alignStart && 'align-items: flex-start;';
  }, function (props) {
    return props.justifyEnd && 'justify-content: flex-end;';
  }, function (props) {
    return props.justifyStart && 'justify-content: flex-start;';
  }, function (props) {
    return props.justifyBetween && 'justify-content: space-between;';
  }, function (props) {
    return props.justifyAround && 'justify-content: space-around;';
  }, function (props) {
    return !(props.alignEnd || props.alignStart) && 'align-items: center;';
  }, function (props) {
    return !(props.justifyEnd || props.justifyStart || props.justifyBetween || props.justifyAround) && 'justify-content: center;';
  }, this.button, this.customize, this.viewBaseProps, this.optionProps, this.mediaProps);

  this.Text = _styledComponents2.default.div(_templateObject13, this.display, function (props) {
    return props.button && '\n        &:hover {\n          cursor: pointer;\n          opacity: 0.5;\n          transition: all 200ms ease-out;\n        }\n      ';
  }, this.button, this.customize, this.viewBaseProps, this.textBaseProps, this.optionProps, this.mediaProps);

  this.AbsoluteView = _styledComponents2.default.div(_templateObject14, function (props) {
    return props.display && 'display: ' + props.display + ';';
  }, function (props) {
    return props.top && 'top: ' + props.top + ';';
  }, function (props) {
    return props.left && 'left: ' + props.left + ';';
  }, function (props) {
    return props.right && 'right: ' + props.right + ';';
  }, function (props) {
    return props.bottom && 'bottom: ' + props.bottom + ';';
  }, function (props) {
    return props.button && '\n        &:hover {\n          cursor: pointer;\n          opacity: 0.5;\n          transition: all 200ms ease-out;\n        }\n      ';
  }, this.button, this.customize, this.viewBaseProps, this.optionProps, this.mediaProps);
};

exports.default = ReactEasyStyledComponents;