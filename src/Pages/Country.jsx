import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";
import Loader from "../Components/Loader";
import NoPage from "./NoPage";

const Country = () => {
  const translate = useSelector((state) => state.language.translation);
  const { country } = useParams();
  const { countriesData, isError, isLoading } = useFetchData(country);
  console.log({ countriesData, country });

  return (
    <>
      {isError && <NoPage />}
      {isLoading && <Loader />}
      {!isError && !isLoading && (
        <div>
          <Link to={"/"}>
            <svg
              className="hidden dark:block"
              width="70"
              height="68"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2012_1255)">
                <rect
                  x="14"
                  y="8"
                  width="42"
                  height="40"
                  rx="6"
                  fill="#1F2937"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8922 22.5355L33.0707 23.714L29.1816 27.6031L44.0309 27.6031L44.0309 29.253L29.1816 29.253L33.0707 33.1421L31.8922 34.3206L25.9996 28.4281L31.8922 22.5355Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_2012_1255"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2012_1255"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2012_1255"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              className="dark:hidden"
              width="70"
              height="68"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2005_992)">
                <rect x="14" y="8" width="42" height="40" rx="6" fill="white" />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
                fill="#111827"
              />
              <defs>
                <filter
                  id="filter0_d_2005_992"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_992"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_992"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>

          <div className="mt-8 flex flex-col gap-24 md:flex-row">
            <img
              className="h-[400px] w-[560px]"
              src={`https://flagcdn.com/w640/${countriesData?.cca2?.toLowerCase()}.png`}
              alt={countriesData?.name?.common}
            />
            <div className="w-full md:mt-10 md:w-1/2">
              <h1 className="mb-6 text-3xl font-extrabold">
                {countriesData?.name?.common}
              </h1>
              <div className="flex w-full justify-between">
                <div className="leading-8">
                  <div>
                    <span className="font-semibold">
                      {translate.NativeName}:{" "}
                    </span>
                    <span className="font-light">
                      {countriesData?.name?.common}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      {translate.Population}:{" "}
                    </span>
                    <span className="font-light">
                      {parseInt(countriesData?.population).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">{translate.Region}: </span>
                    <span className="font-light">{countriesData?.region}</span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      {translate.SubRegion}:{" "}
                    </span>
                    <span className="font-light">
                      {countriesData?.subregion}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">{translate.Capital}: </span>
                    <span className="font-light">{countriesData?.capital}</span>
                  </div>
                </div>
                <div className="leading-8">
                  <div>
                    <span className="font-semibold">
                      {translate.TopLevelDomain}:
                    </span>
                    <span className="font-light">
                      {countriesData?.tld?.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      {translate.Currencies}:{" "}
                    </span>
                    <span className="font-light">
                      {countriesData?.currencies &&
                        Object.keys(countriesData.currencies)
                          .map(
                            (currency) =>
                              `${countriesData?.currencies[currency]?.name}`,
                          )
                          .join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">
                      {translate.Languages}:{" "}
                    </span>
                    <span className="font-light">
                      {countriesData?.languages &&
                        Object.values(countriesData.languages)
                          .map((language) => `${language}`)
                          .join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
