import{t as e}from"./index-13Rr7eJH.js";var t=e();function n(e){let n={blockquote:`blockquote`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:`This article offers a instruction that can be used in to build a Hugo Site.`}),`
`,(0,t.jsx)(n.h2,{children:`1) Install Hugo with winget`}),`
`,(0,t.jsx)(n.p,{children:`On Windows PowerShell:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`winget install Hugo.Hugo.Extended
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Hugo’s official Windows install docs explicitly list `,(0,t.jsx)(n.code,{children:`winget install Hugo.Hugo.Extended`}),` for the extended edition.`]}),`
`,(0,t.jsx)(n.p,{children:`Quick check:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`hugo version
`})}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{children:`2) Create a new site`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`hugo new site site_name
`})}),`
`,(0,t.jsx)(n.p,{children:`That’s the official CLI command for creating a new Hugo site directory.`}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsxs)(n.h2,{children:[`3) `,(0,t.jsx)(n.code,{children:`cd`}),` into your site`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`cd site_name
`})}),`
`,(0,t.jsx)(n.p,{children:`Now initialize git (you’ll need it for submodules and GitHub anyway):`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`git init
`})}),`
`,(0,t.jsxs)(n.blockquote,{children:[`
`,(0,t.jsx)(n.p,{children:`Hugo’s own docs note Git is commonly required if you install a theme as a submodule.`}),`
`]}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{children:`4) Add a theme template using a git submodule`}),`
`,(0,t.jsx)(n.p,{children:`Inside your site folder:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`git submodule add https://github.com/<theme-author>/<theme-repo>.git themes/<theme-name>
`})}),`
`,(0,t.jsx)(n.p,{children:`This is the same pattern Hugo shows in its quick start (theme as a submodule).`}),`
`,(0,t.jsx)(n.p,{children:`Then set the theme in config (example):`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-toml`,children:`theme = "<theme-name>"
`})}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{children:`5) Config file: don’t do the “rename” step blindly`}),`
`,(0,t.jsxs)(n.h3,{children:[`The one setting you can’t mess up: `,(0,t.jsx)(n.code,{children:`baseURL`})]}),`
`,(0,t.jsxs)(n.p,{children:[`If your `,(0,t.jsx)(n.code,{children:`baseURL`}),` is wrong, you’ll get the classic “theme loads locally but CSS breaks on Pages” behavior because URLs get generated differently.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Hugo’s config docs show `,(0,t.jsx)(n.code,{children:`baseURL`}),` as a core “new site” setting.`]}),`
`,(0,t.jsx)(n.p,{children:`Typical values:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsxs)(n.p,{children:[`User/Org Pages repo (`,(0,t.jsx)(n.code,{children:`username.github.io`}),`):`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:`baseURL = "https://username.github.io/"`})}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsxs)(n.p,{children:[`Project Pages repo (`,(0,t.jsx)(n.code,{children:`username.github.io/repo-name/`}),`):`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:`baseURL = "https://username.github.io/repo-name/"`})}),`
`]}),`
`]}),`
`]}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsxs)(n.h2,{children:[`6) The `,(0,t.jsx)(n.code,{children:`master/master.pub`}),` deploy-key technique (source repo ➜ publish repo)`]}),`
`,(0,t.jsxs)(n.p,{children:[`This is the technique from bzoltan’s guide: generate an SSH keypair, store the `,(0,t.jsx)(n.strong,{children:`private key`}),` in the `,(0,t.jsx)(n.strong,{children:`source repo secrets`}),`, and add the `,(0,t.jsx)(n.strong,{children:`public key`}),` as a `,(0,t.jsx)(n.strong,{children:`Deploy key`}),` on the `,(0,t.jsx)(n.strong,{children:`publish repo`}),`.`]}),`
`,(0,t.jsx)(n.h3,{children:`Generate the keypair locally`}),`
`,(0,t.jsx)(n.p,{children:`From your machine:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-bash`,children:`ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f master -N ""
`})}),`
`,(0,t.jsx)(n.p,{children:`This creates:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`master`}),` (private key)`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:`master.pub`}),` (public key)`]}),`
`]}),`
`,(0,t.jsx)(n.h3,{children:`Put keys in the right places`}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[`In the `,(0,t.jsx)(n.em,{children:`source`}),` repo`]}),` (the Hugo repo):`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsxs)(n.p,{children:[`Add `,(0,t.jsx)(n.code,{children:`master`}),` (private key contents) into a GitHub Actions secret named:`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:`ACTIONS_DEPLOY_KEY`})}),`
`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[`In the `,(0,t.jsx)(n.em,{children:`publish`}),` repo`]}),` (e.g. `,(0,t.jsx)(n.code,{children:`username/repo-name.github.io`}),`):`]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Add `,(0,t.jsx)(n.code,{children:`master.pub`}),` as a `,(0,t.jsx)(n.strong,{children:`Deploy key`})]}),`
`,(0,t.jsx)(n.li,{children:`You must allow write access, because the workflow will push generated files.`}),`
`]}),`
`,(0,t.jsxs)(n.blockquote,{children:[`
`,(0,t.jsx)(n.p,{children:`Security note: deploy keys are scoped to a single repo, which is the whole point here.`}),`
`]}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.h2,{children:`7) Push your Hugo source repo`}),`
`,(0,t.jsx)(n.p,{children:`Create your GitHub repo (source), then:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-powershell`,children:`git add .
git commit -m "Initial Hugo site"
git branch -M main
git remote add origin git@github.com:<you>/<source-repo>.git
git push -u origin main
`})}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsxs)(n.h2,{children:[`8) Add the GitHub Action workflow (`,(0,t.jsx)(n.code,{children:`.github/workflows/pages.yaml`}),`)`]}),`
`,(0,t.jsx)(n.p,{children:`Create:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:`.github/workflows/pages.yaml`})}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Then paste your workflow (this is basically the modernized version of the approach in the bzoltan post, but using newer action versions).`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-yaml`,children:`name: hugo publish

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: "latest"
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          deploy_key: \${{ secrets.ACTIONS_DEPLOY_KEY }}
          external_repository: usersrepo-name.github.io
          publish_branch: main
          publish_dir: ./public
          allow_empty_commit: false
          commit_message: \${{ github.event.head_commit.message }}
`})}),`
`,(0,t.jsx)(n.h3,{children:`Two critical details people forget`}),`
`,(0,t.jsxs)(n.ol,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:`Submodules must be enabled`}),` in checkout, or your theme won’t exist in CI and the build will fail or look unstyled.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Your `,(0,t.jsx)(n.strong,{children:`publish repo Pages settings`}),` must publish from the branch you push to (here: `,(0,t.jsx)(n.code,{children:`main`}),`, root). GitHub’s Pages docs describe configuring the publishing source under Settings → Pages.`]}),`
`]})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}export{r as default};