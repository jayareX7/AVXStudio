import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

const Services = ({ services }) => (
  <>
    <Layout>
      <>
        <div className="service-grid">
          <div className="col-xl-4 col-lg-4 col-md-4 mt-3r mx-1r col-sm-4 ">
            <div className="zoom">
              <Link href="/services/audio-design" passHref>
                <a>
                  <Image width={400} height={450} src="/audio-design.webp" />
                  <div class="service-overlay-left">
                    <div class="service-overlay-text">Audio Design</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 mt-3r mx-1r col-sm-4 ">
            <div className="zoom">
              <Link href={"/services/corporate-identity"} passHref>
                <a>
                  <Image
                    width={400}
                    height={450}
                    src="/corporate-identity.webp"
                  />
                  <div class="service-overlay-right">
                    <div class="service-overlay-text">Corporate Identity</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="service-grid">
          <div className="col-xl-4 col-lg-4 col-md-4 mt-3r mx-1r col-sm-4 ">
            <div className="zoom">
              <Link href={"/services/graphic-design"} passHref>
                <a>
                  <Image width={400} height={450} src="/graphic-design.webp" />
                  <div class="service-overlay-left">
                    <div class="service-overlay-text">Graphic Design</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 mt-3r mx-1r col-sm-4 ">
            <div className="zoom">
              <Link href={"/services/marketing"} passHref>
                <a>
                  <Image width={400} height={450} src="/marketing.webp" />
                  <div class="service-overlay-right">
                    <div class="service-overlay-text">Marketing</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="service-grid">
          <div className="col-xl-4 col-lg-4 col-md-4 mt-3r mx-1r col-sm-4 ">
            <div className="zoom">
              <Link href={"/services/visual-design"} passHref>
                <a>
                  <Image
                    className="service-image"
                    width={400}
                    height={450}
                    src="/visual-design.webp"
                  />
                  <div class="service-overlay-left">
                    <div class="service-overlay-text">Visual Design</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 mt-3r mx-1r col-sm-4 ">
            <div className="zoom">
              <Link href={"/services/web-design"} passHref>
                <a>
                  <Image width={400} height={450} src="/web-design.webp" />
                  <div class="service-overlay-right">
                    <div class="service-overlay-text">Web Design</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    </Layout>
  </>
);

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/services");
  const serviceData = await response.json();

  return {
    props: {
      services: serviceData,
    },
  };
}

export default Services;
