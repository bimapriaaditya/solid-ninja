type CardProps = {
  class?: string;
};

export const Card = (props: CardProps) => {
  return (
    <>
      <div class={`rounded-md border shadow-sm p-2 ${props.class}`}>
        <div class="p-4 border-b">
          <h1 class="text-xl font-bold">Header</h1>
        </div>
        <div class="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          praesentium aliquam quos! Laboriosam perspiciatis veritatis odio
          ducimus, ut tenetur obcaecati mollitia voluptas consequuntur dolorum
          repellendus blanditiis ratione nobis saepe rerum?
        </div>
      </div>
    </>
  );
};

export default Card;
