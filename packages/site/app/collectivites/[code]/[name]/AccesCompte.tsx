import ButtonWithLink from '@components/dstet/buttons/ButtonWithLink';

type AccesCompteProps = {
  description: string;
  cta: string;
  href: string;
};

const AccesCompte = ({description, cta, href}: AccesCompteProps) => {
  return (
    <div className="flex flex-col items-center md:rounded-[10px] bg-primary-1 md:bg-white py-10 px-8 lg:p-8">
      <p className="text-center text-primary-8 font-bold text-[18px] leading-[28px]">
        {description}
      </p>
      <ButtonWithLink href={href} size="big">
        {cta}
      </ButtonWithLink>
    </div>
  );
};

export default AccesCompte;
