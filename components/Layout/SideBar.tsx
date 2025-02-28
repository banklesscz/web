import { useEffect, useState } from 'react'

import HashPost from '../Hashovky/HashPost'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import SocInvite from 'components/SocInvite'
import NewsletterSideBar from "components/NewsletterSideBar/NewsletterSideBar"

const SideBar = ({
  hashovky,
  topTab = 'novinky',
}: {
  hashovky?: PostOrPage[]
  topTab?: string
}) => {
  const [hashovkyState, setHashovkyState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    if (!hashovky) return
    setHashovkyState([...hashovkyState, ...hashovky])
    setNextPage(nextPage + 1)
  }, [hashovky])

  const _instagram = () => (
    <div className="axil-single-widget widget widget_instagram mb--30">
      <h5 className="widget-title">Instagram</h5>
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="https://cdn.lightwidget.com/widgets/e09f0e394e805ec8ba1e7083159388fe.html"
        scrolling="no"
        className="lightwidget-widget"
        style={{ width: '100%', border: '0', overflow: 'hidden' }}
      ></iframe>
    </div>
  )

  const _cryptoType = () => (
    <div className="axil-single-widget widget widget_categories mb--30">
      <ul>
        <li className="cat-item">
          <Link href={`/${topTab}/ethereum`} shallow={true} scroll={false}>
            <a className="inner">
              <div className="thumbnail">
                <picture>
                  <source
                    srcSet="/images/icons/ethereum.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/icons/ethereum.png"
                    type="image/png"
                  />
                  <img src="/images/icons/ethereum.png" alt="Ethereum" />
                </picture>
              </div>
              <div className="content">
                <h5 className="title">Ethereum</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className="cat-item">
          <Link href={`/${topTab}/bitcoin`} shallow={true} scroll={false}>
            <a className="inner">
              <div className="thumbnail">
                <picture>
                  <source
                    srcSet="/images/icons/bitcoin.webp"
                    type="image/webp"
                  />
                  <source srcSet="/images/icons/bitcoin.png" type="image/png" />
                  <img src="/images/icons/bitcoin.png" alt="Bitcoin" />
                </picture>
              </div>
              <div className="content">
                <h5 className="title">Bitcoin</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className="cat-item">
          <Link href={`/${topTab}/polkadot`} shallow={true} scroll={false}>
            <a className="inner">
              <div className="thumbnail">
                <picture>
                  <source
                    srcSet="/images/icons/polkadot.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/icons/polkadot.jpg"
                    type="image/jpeg"
                  />
                  <img src="/images/icons/polkadot.jpg" alt="Polkadot" />
                </picture>
              </div>
              <div className="content">
                <h5 className="title">Polkadot</h5>
              </div>
            </a>
          </Link>
        </li>
        <li className="cat-item">
          <Link href={`/${topTab}/ostatni`} shallow={true} scroll={false}>
            <a className="inner">
              <div className="thumbnail">
                <img
                  src="/images/logo/logo_hash_64.png"
                  alt="Ostatní"
                  style={{ width: '28px' }}
                />
              </div>
              <div className="content">
                <h5 className="title">Ostatní</h5>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )

  const _linkToHashovky = () => (
    <div className="content-block post-medium justify-content-center">
      <div className="post-content hash-news">
        <span className="hash-content">
          <Link href={'/hashovky'}>
            <a>Více hashovek</a>
          </Link>
        </span>
      </div>
    </div>
  )

  const _hashovky = (hashovky?: PostOrPage[]) => (
    <div className="post-medium-block axil-single-widget">
      <h5 className="widget-title">#Hashovky</h5>
      {hashovky?.slice(0, 3).map((hashovka, i) => (
        <HashPost
          key={i}
          meta_title={hashovka.meta_title || ''}
          meta_description={hashovka.meta_description || ''}
          feature_image={hashovka.feature_image || ''}
          html={hashovka.html || ''}
          published_at={hashovka.published_at || ''}
        />
      ))}
      {_linkToHashovky()}
    </div>
  )

  const _newsletter = () => (
    <div className="axil-single-widget widget widget_instagram mb--30">
      <h5 className="widget-title">Newsletter</h5>
      <NewsletterSideBar />
    </div>
  )

  const _socFollow = () => (
    <div className="axil-single-widget widget widget_social mb--30">
      <h5 className="widget-title">Sledujte nás</h5>
      <SocInvite />
    </div>
  )

  return (
    <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
      <div className="sidebar-inner">
        {_cryptoType()}

        {_newsletter()}

        {_hashovky(hashovky)}

        {_socFollow()}

        {_instagram()}
      </div>
    </div>
  )
}

export default SideBar
