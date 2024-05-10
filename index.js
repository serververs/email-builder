const builder = require("@usewaypoint/email-builder");
const avatar = require("@usewaypoint/block-avatar");
const button = require("@usewaypoint/block-button");
const container = require("@usewaypoint/block-container");
const divider = require("@usewaypoint/block-divider");
const heading = require("@usewaypoint/block-heading");
const html = require("@usewaypoint/block-html");
const image = require("@usewaypoint/block-image");
const spacer = require("@usewaypoint/block-spacer");
const text = require("@usewaypoint/block-text");

console.log("Parse avatar", avatar.AvatarPropsSchema.parse({}));
console.log("Parse button", button.ButtonPropsSchema.parse({}));
console.log("Parse container", container.ContainerPropsSchema.parse({}));
console.log("Parse divider", divider.DividerPropsSchema.parse({}));
console.log("Parse heading", heading.HeadingPropsSchema.parse({}));
console.log("Parse html", html.HtmlPropsSchema.parse({}));
console.log("Parse image", image.ImagePropsSchema.parse({}));
console.log("Parse spacer", spacer.SpacerPropsSchema.parse({}));
console.log("Parse text", text.TextPropsSchema.parse({}));

const result = builder.renderToStaticMarkup(
  {
    root: {
      type: "EmailLayout",
      data: {
        backdropColor: "#F8F8F8",
        canvasColor: "#FFFFFF",
        textColor: "#242424",
        fontFamily: "MODERN_SANS",
        childrenIds: ["block-1709578146127"],
      },
    },
    "block-1709578146127": {
      type: "Text",
      data: {
        style: {
          fontWeight: "normal",
          padding: {
            top: 16,
            bottom: 16,
            right: 24,
            left: 24,
          },
        },
        props: {
          text: "Hello world",
        },
      },
    },
  },
  { rootBlockId: "root" }
);

console.log(result);
