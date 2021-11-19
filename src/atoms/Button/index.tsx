import className from "classnames";

type IButtonProps = {
  xl?: boolean;
  children: string;
  marginTop?: boolean;
  hero100?: boolean;
  hero200?: boolean;
  industry?: boolean;
  search?: boolean;
  playstore?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    "btn-xl": props.xl,
    "btn-base": !props.xl,
    "btn-primary": true,
    "mt-4": props.marginTop,
    "hero-200": props.hero200,
    "hero-100": props.hero100,
    industry: props.industry,
    "btn-search": props.search,
    "btn-playstore": props.playstore,
  });

  return (
    <div className={btnClass}>
      {props.children}
    </div>
  );
};

export { Button };
