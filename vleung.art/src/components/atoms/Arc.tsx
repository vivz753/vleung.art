interface ArcProps {
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  cssStyle: any // change ? 
}

const Arc: React.FC<ArcProps> = (props) => {

  const polarToCartesian =
    (centerX: number, centerY: number, radius: number, angleInDegrees: number):
    {x: number, y: number} => {

      var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
  }

  const describeArc =
    (x: number, y: number, radius: number, startAngle: number, endAngle: number):
    string => {

      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);

      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");

      return d;       
  }

    return (
        <svg>
          <path fill="none" stroke="#000" strokeWidth="20"
            d={describeArc(props.x, props.y, props.radius, props.startAngle, props.endAngle)}
            css={[...props.cssStyle]}
           />
        </svg>
    )
}

export default Arc;