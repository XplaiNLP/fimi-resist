import { getAsset, getPermalink } from './utils/permalinks';
export const headerData = {
  links: [
    { text: 'Mission', href: getPermalink('/#mission') },
    { text: 'What we do', href: getPermalink('/#work') },
    { text: 'Partners', href: getPermalink('/#partners') },
    { text: 'Resources', href: getPermalink('/#resources') },
  ],
  actions: [{ text: 'Updates', href: getPermalink('/#updates') }],
};
export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Mission', href: getPermalink('/#mission') },
        { text: 'What we do', href: getPermalink('/#work') },
        { text: 'Partners', href: getPermalink('/#partners') },
        { text: 'Resources', href: getPermalink('/#resources') },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'Grant 101285890', href: 'https://cordis.europa.eu/' },
        {
          text: 'Horizon Europe',
          href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',
        },
        { text: 'Coordinator: JGU Mainz', href: 'https://www.uni-mainz.de/' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy', href: getPermalink('/privacy') }],
  socialLinks: [],
  footNote: `<span style="display:block;width:305px;max-width:100%;overflow:hidden;margin:0 auto 1.25rem"><img src="${getAsset('/eu-funding.png')}" alt="Funded by the European Union" style="width:774px;max-width:none;height:66px"></span>Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Research Executive Agency. Neither the European Union nor the granting authority can be held responsible for them.<br><br>FIMI-RESIST · Grant Agreement No. 101285890 · 2026–2029`,
};
