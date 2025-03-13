import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Nav from "./styled";

const lang = [
  { label: "cs", value: "cs" },
  { label: "en", value: "en" },
  { label: "de", value: "de" },
];

const Lang: FC<{ localization: { slug: string; locale: string }[] }> = ({
  localization,
}) => {
  const router = useRouter();

  return (
    <Nav>
      <ul>
        {localization?.length && lang.map((item, idx) => {
          const slugLocale = localization.find((itemLocale) => itemLocale.locale === item.value)
          return (
            <li
              key={idx}
              className={router.locale === item.value ? "active" : undefined}
            >
              <Link
                replace
                href={
                  slugLocale
                    ? slugLocale.slug
                    : "/"
                }
                locale={item.value}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Lang;
