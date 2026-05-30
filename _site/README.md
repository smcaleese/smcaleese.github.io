# My Personal Site

This is a Jekyll site. The project is pinned to Ruby `3.3.6` in `.ruby-version`
and `Gemfile`, and Bundler is pinned in `Gemfile.lock`.

## First-time setup

Install `rbenv` and `ruby-build`:

```bash
brew install rbenv ruby-build
```

For zsh, add `rbenv` to your shell:

```bash
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
exec zsh
```

Install the project Ruby and Bundler:

```bash
rbenv install 3.3.6
gem install bundler:2.6.3
```

Check that your shell is using `rbenv`:

```bash
which ruby
ruby -v
which bundle
```

The paths for `ruby` and `bundle` should be under:

```text
/Users/stephen/.rbenv/shims/
```

## How to run

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at:

```text
http://127.0.0.1:4000
```

If `which ruby` still shows `/usr/bin/ruby`, restart your shell with:

```bash
exec zsh
```
