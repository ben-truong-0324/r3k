import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function StreakChart({ data }: { data: number[] }) {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    // Example D3 drawing
    svg.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 30).attr('fill', 'teal');
  }, [data]);

  return <svg ref={ref} width={200} height={100}></svg>;
}