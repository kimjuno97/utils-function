/** 원형배치 함수 */
interface TcirclePosition{
	center: {x:number, y:number};
	index: number;
	length: number
}

const circlePosition = ({ center, index, length }:TcirclePosition) => {
	/** 반지름 */
	const radius = 250;
	/** 각도 */
	const angle = (360 / length) * index;
	console.log('360 / length', 360 / length, 'angle', angle);
	// https://m.blog.naver.com/wyepark/220517029219 디그리와 라디안
	const x = center.x + radius * Math.cos((angle * Math.PI) / 180);
	const y = center.y + radius * Math.sin((angle * Math.PI) / 180);
	return { x, y };
};

