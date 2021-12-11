import '../atoms/Arc'
import Arc from '../atoms/Arc'
import { keyframes, css } from '@emotion/react'

const Rainbow: React.FC = (props) => {

  // prefer if i can do this through ref on <path> in Arc
    //  const pathLength = document.querySelector('path')?.getTotalLength(); // is there a way to do this without querying the document?
  const pathLength = 314;

  const strokeDash = keyframes`
    to {
      stroke-dashoffset: ${pathLength};
    }
  `
  // can be prop
  const height = 50;

  // should be fixed
  const viewBox = "25 40 250 100";
  const center = 150;
  const r = 100;
  const lArcAngle = 270;
  const rArcAngle = 90;

  return (
    <div className="flex justify-center w-auto h-auto">
      <div className="relative">
      <div className="">
        <Arc
          viewBox={viewBox}
          height={height}
          x={center}
          y={center}
          radius={r}
          startAngle={lArcAngle}
          endAngle={rArcAngle}
          cssStyle={[
            css`stroke-dasharray: ${pathLength};`,
            css`animation: ${strokeDash} 2s infinite alternate ease;`,
            css`stroke: #FF1B8D`
          ]}
        />
      </div>
      <div className="absolute bottom-0">
        <Arc
          viewBox={viewBox}
          height={height}
          x={center}
          y={center}
          radius={r-20}
          startAngle={lArcAngle}
          endAngle={rArcAngle}
          cssStyle={[
            css`stroke-dasharray: ${pathLength};`,
            css`animation: ${strokeDash} 2s infinite alternate ease;`,
            css`stroke: #FFDA00`
          ]}
        />
      </div>
      <div className="absolute bottom-0">
        <Arc
          viewBox={viewBox}
          height={height}
          x={center}
          y={center}
          radius={r-40}
          startAngle={lArcAngle}
          endAngle={rArcAngle}
          cssStyle={[
            css`stroke-dasharray: ${pathLength};`,
            css`animation: ${strokeDash} 2s infinite alternate ease;`,
            css`stroke: #1BB3FF`
          ]}
        />
      </div>
      </div>
    </div>
     
  )
}

export default Rainbow;