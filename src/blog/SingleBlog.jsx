import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPost from "../shop/PopularPost";
import Tags from "../shop/Tags";
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt="" />
                              </div>
                              <div className="post-content">
                                <h4>{item.title}</h4>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Recusandae, aliquid at. A
                                  possimus quis ducimus corporis. Quas
                                  recusandae saepe laudantium officia possimus,
                                  neque error omnis eius. Dicta aut ducimus unde
                                  quo consectetur, officia nulla? Aspernatur,
                                  vero pariatur. Ipsum molestiae eum dolore vel
                                  fugit corporis ipsa architecto repellat, iusto
                                  aut consequatur?Lorem ipsum dolor sit, amet
                                  consectetur adipisicing elit. Odio ut animi
                                  est dolor architecto ab aperiam soluta
                                  mollitia neque eos!
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Reiciendis necessitatibus
                                    vitae magni itaque distinctio ullam soluta,
                                    repellat cum dolore velit!
                                  </p>
                                  <cite>
                                    <a href="#">...Khushi Nepal</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Quis, praesentium molestias
                                  dolores soluta dolorum expedita? Molestias
                                  velit at odit veritatis incidunt. Dicta ab
                                  necessitatibus quisquam cupiditate repellendus
                                  doloremque iusto quo iure nisi harum adipisci
                                  laborum, dolorem libero autem iste delectus
                                  minima, unde dolorum fugit. Laudantium,
                                  doloremque quasi dicta accusamus eligendi
                                  cupiditate saepe! Nemo saepe, magnam pariatur
                                  blanditiis nostrum, eaque laudantium laborum
                                  debitis expedita at, excepturi distinctio odit
                                  voluptatum voluptas doloribus reiciendis.
                                  Blanditiis, corrupti? Hic fugit cupiditate
                                  eius quia quaerat voluptatem!
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Fugit autem quo velit quas
                                  voluptatum similique eos delectus obcaecati
                                  mollitia soluta, amet eaque accusamus iure non
                                  porro vero earum repellendus pariatur
                                  corporis? Voluptatum voluptatem, modi minus ad
                                  explicabo at. Laudantium, natus.
                                </p>
                                <div className="tag-section"></div>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/HcOc7P5BMi4?si=WcE9xq-8Xi4Aa_uW"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Molestias harum, fugiat vero
                                  iusto totam sequi similique at soluta
                                  repellendus minima quo ullam unde eos, et
                                  corrupti modi, a commodi? Aliquam, inventore
                                  soluta. Vitae nostrum voluptatum ullam rerum
                                  vero neque ipsa omnis itaque, debitis unde
                                  doloribus consequuntur voluptas earum ab id.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="naavigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>
                          <b> Previous Blog</b>
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse, neque.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/> 

              </aside>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
