"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Database,
  Wrench,
  Users,
  GraduationCap,
  Briefcase,
  ExternalLink,
  ArrowRight,
  ChevronUp,
  Target,
  Heart,
  CheckCircle2,
  Zap,
  TrendingUp,
  Eye,
  Layers,
  Lightbulb,
  Award,
  BookOpen,
  Filter,
  X,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

const navItems = [
  { key: "about", href: "#sobre" },
  { key: "skills", href: "#competencias" },
  { key: "projects", href: "#projetos" },
  { key: "experience", href: "#experiencia" },
  { key: "education", href: "#formacao" },
  { key: "contact", href: "#contato" },
] as const

export default function Portfolio() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeFilter, setActiveFilter] = useState(0)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filteredProjects = useMemo(() => {
    if (activeFilter === 0) return t.projects
    const category = t.projectsSection.categories[activeFilter]
    return t.projects.filter((p) => p.category === category)
  }, [activeFilter, t])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        {t.skipToContent}
      </a>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "glass" : ""}`}>
        <nav className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-mono text-primary font-bold text-lg hover:opacity-80 transition-opacity">
            {"<RE />"}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contato"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t.nav.contact}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section aria-label={t.hero.name} className="relative min-h-screen flex items-center pt-20 px-4">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {t.hero.available}
                  </div>
                  <p className="text-muted-foreground font-mono text-sm tracking-wider">{t.hero.greeting}</p>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">{t.hero.name}</h1>
                  <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">{t.hero.role}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{t.hero.intro}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong className="text-foreground">6+</strong>{" "}
                      <span className="text-muted-foreground">{t.hero.stats.projects}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong className="text-foreground">100%</strong>{" "}
                      <span className="text-muted-foreground">{t.hero.stats.responsive}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong className="text-foreground">WCAG</strong>{" "}
                      <span className="text-muted-foreground">{t.hero.stats.accessible}</span>
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projetos"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 glow-sm"
                  >
                    {t.hero.ctaProjects}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:border-primary/50 transition-all"
                  >
                    {t.hero.ctaContact}
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://github.com/Elias-1709"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rodrigoelias1709"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:rodrigo.elias.dev@gmail.com"
                    aria-label="Send Email"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right content - Code block */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl blur-xl" />
                  <div className="relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs text-muted-foreground font-mono">developer.ts</span>
                    </div>
                    {/* Code content */}
                    <pre className="p-6 text-sm font-mono overflow-x-auto">
                      <code>
                        <span className="text-muted-foreground">{t.hero.codeComment}</span>
                        {"\n\n"}
                        <span className="text-primary">interface</span>{" "}
                        <span className="text-yellow-400">Developer</span>{" "}
                        <span className="text-muted-foreground">{"{"}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">name</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-yellow-400">string</span>
                        <span className="text-muted-foreground">;</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">role</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-yellow-400">string</span>
                        <span className="text-muted-foreground">;</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">skills</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-yellow-400">string[]</span>
                        <span className="text-muted-foreground">;</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">available</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-yellow-400">boolean</span>
                        <span className="text-muted-foreground">;</span>
                        {"\n"}
                        <span className="text-muted-foreground">{"}"}</span>
                        {"\n\n"}
                        <span className="text-primary">const</span>{" "}
                        <span className="text-foreground">rodrigo</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-yellow-400">Developer</span>{" "}
                        <span className="text-muted-foreground">=</span>{" "}
                        <span className="text-muted-foreground">{"{"}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">name</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400">{'"Rodrigo Elias"'}</span>
                        <span className="text-muted-foreground">,</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">role</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400">{'"Web Developer"'}</span>
                        <span className="text-muted-foreground">,</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">skills</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-muted-foreground">[</span>
                        <span className="text-green-400">{'"React"'}</span>
                        <span className="text-muted-foreground">,</span>{" "}
                        <span className="text-green-400">{'"Next.js"'}</span>
                        <span className="text-muted-foreground">,</span>{" "}
                        <span className="text-green-400">{'"..."'}</span>
                        <span className="text-muted-foreground">],</span>
                        {"\n"}
                        {"  "}
                        <span className="text-foreground">available</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400">true</span>
                        {"\n"}
                        <span className="text-muted-foreground">{"};"}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground font-mono">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" aria-label={t.about.title} className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-mono text-sm">{t.about.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.about.title}</h2>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Profile card */}
              <div className="lg:col-span-1">
                <div className="glass rounded-2xl p-6 text-center sticky top-24">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30">
                    <span className="text-4xl font-bold text-primary">RE</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Rodrigo Elias</h3>
                  <p className="text-primary text-sm font-mono mb-4">{"<Developer /> & Analyst"}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {t.about.profileBadge}
                  </span>

                  {/* Quick links */}
                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <a
                      href="#projetos"
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="text-sm">{t.about.seeProjects}</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="mailto:rodrigo.elias.dev@gmail.com"
                      className="flex items-center justify-between p-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <span className="text-sm font-medium">{t.about.getInTouch}</span>
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{t.about.card1Title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.about.card1Text}</p>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{t.about.card2Title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.about.card2Text}</p>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{t.about.card3Title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{t.about.card3Text}</p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.statEducation}</p>
                    <p className="text-sm font-medium mt-1">{t.about.statEducationValue}</p>
                  </div>
                  <div className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-colors">
                    <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.statFocus}</p>
                    <p className="text-sm font-medium mt-1">{t.about.statFocusValue}</p>
                  </div>
                  <div className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-colors">
                    <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.statApproach}</p>
                    <p className="text-sm font-medium mt-1">{t.about.statApproachValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competencias" aria-label={t.skillsSection.title} className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-mono text-sm">{t.skillsSection.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skillsSection.title}</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">{t.skillsSection.subtitle}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                <Code2 className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-4">{t.skillsSection.frontend}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Analysis */}
              <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                <Database className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-4">{t.skillsSection.analysis}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.skills.analysis.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                <Wrench className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-4">{t.skillsSection.tools}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                <Users className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-4">{t.skillsSection.soft}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Code footer */}
            <div className="mt-12 text-center">
              <p className="font-mono text-sm">
                <span className="text-muted-foreground">{"{ "}</span>
                <span className="text-primary">learning</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-green-400"> always</span>
                <span className="text-muted-foreground">, </span>
                <span className="text-primary">improving</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-green-400"> continuously</span>
                <span className="text-muted-foreground">{" }"}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" aria-label={t.projectsSection.title} className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-mono text-sm">{t.projectsSection.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projectsSection.title}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">{t.projectsSection.subtitle}</p>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-12">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {t.projectsSection.categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeFilter === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.name}
                  className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
                >
                  {/* Header with category badge */}
                  <div className="bg-secondary/50 p-4 border-b border-border flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-3 py-1 bg-foreground/5 border border-primary/30 text-foreground text-xs font-semibold rounded-full">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <span key={highlight} className="text-xs text-muted-foreground">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-muted-foreground">{project.description}</p>

                    {/* Challenge */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {t.projectsSection.challengeLabel}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {t.projectsSection.solutionLabel}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>

                    {/* Expandable content */}
                    {expandedProject === project.name && (
                      <div className="space-y-4 pt-4 border-t border-border animate-in fade-in duration-300">
                        {/* Contribution */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                              {t.projectsSection.contributionLabel}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.contribution}</p>
                        </div>

                        {/* Learnings */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                              {t.projectsSection.learningsLabel}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.learnings}</p>
                        </div>

                        {/* Impact */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                              {t.projectsSection.impactLabel}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.impact}</p>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {t.projectsSection.techLabel}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-foreground text-xs rounded border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <button
                        onClick={() =>
                          setExpandedProject(expandedProject === project.name ? null : project.name)
                        }
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                      >
                        {expandedProject === project.name ? (
                          <>
                            <X className="w-4 h-4" />
                            {t.projectsSection.showLess}
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            {t.projectsSection.seeCaseStudy}
                          </>
                        )}
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projectsSection.seeProject}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center space-y-4">
              <p className="text-muted-foreground font-mono text-sm">{t.projectsSection.moreComing}</p>
              <a
                href="https://github.com/Elias-1709"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Github className="w-5 h-5" />
                {t.projectsSection.seeGithub}
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" aria-label={t.experienceSection.title} className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-mono text-sm">{t.experienceSection.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.experienceSection.title}</h2>

            <div className="glass rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold">{t.experience.title}</h3>
                      <p className="text-muted-foreground text-sm">{t.experience.subtitle}</p>
                      <p className="text-primary font-medium">{t.experience.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {t.experience.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{t.experience.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      {t.experienceSection.responsibilitiesLabel}
                    </h4>
                    <ul className="space-y-3">
                      {t.experience.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      {t.experienceSection.achievementsLabel}
                    </h4>
                    <ul className="space-y-3">
                      {t.experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {t.experience.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground font-mono text-sm">{t.experienceSection.ready}</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="formacao" aria-label={t.educationSection.title} className="py-24 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-mono text-sm">{t.educationSection.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.educationSection.title}</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Education */}
              <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{t.education.degree}</h3>
                    <p className="text-primary">{t.education.institution}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {t.education.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Complementary Courses */}
              <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{t.educationSection.coursesLabel}</h3>
                </div>
                <ul className="space-y-3">
                  {t.education.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" aria-label={t.contact.title} className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-mono text-sm">{t.contact.tag}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">{t.contact.subtitle}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Email CTA */}
              <a
                href="mailto:rodrigo.elias.dev@gmail.com"
                className="lg:col-span-1 bg-primary text-primary-foreground rounded-2xl p-6 hover:opacity-90 transition-all hover:scale-105 glow flex items-center gap-4"
              >
                <Mail className="w-8 h-8" />
                <span className="font-medium">{t.contact.getInTouch}</span>
              </a>

              {/* Email */}
              <a
                href="mailto:rodrigo.elias.dev@gmail.com"
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors text-sm">
                      rodrigo.elias.dev@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rodrigoelias1709"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                    <p className="font-medium group-hover:text-primary transition-colors">/in/rodrigoelias1709</p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Elias-1709"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">GitHub</p>
                    <p className="font-medium group-hover:text-primary transition-colors">/Elias-1709</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Terminal */}
            <div className="mt-12 max-w-xl mx-auto">
              <div className="glass rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
                </div>
                <div className="p-4">
                  <p className="font-mono text-sm">
                    <span className="text-primary">$</span>{" "}
                    <span className="text-muted-foreground">echo</span>{" "}
                    <span className="text-green-400">{t.contact.terminalText}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <Link href="/" className="font-mono text-primary font-bold text-lg">
                {"<RE />"}
              </Link>
              <p className="text-muted-foreground text-sm mt-2">{t.footer.role}</p>
              <p className="text-muted-foreground text-xs mt-2">{t.footer.tagline}</p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{t.footer.navigation}</h3>
              <nav className="flex flex-wrap gap-x-4 gap-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{t.footer.connect}</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Elias-1709"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/rodrigoelias1709"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rodrigo.elias.dev@gmail.com"
                  aria-label="Email"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500" /> Rodrigo Elias
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label={t.backToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:opacity-90 hover:scale-110 transition-all glow z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
