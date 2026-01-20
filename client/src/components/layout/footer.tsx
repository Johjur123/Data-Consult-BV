export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">
              Fractional<span className="text-secondary">BI</span>
            </h3>
            <p className="text-primary-foreground/70 max-w-xs">
              Strategisch BI & Data Consulting. Van data chaos naar structurele sturing en inzicht.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Maturity Scan</li>
              <li>Fractional Head of BI</li>
              <li>Governance & Strategy</li>
              <li>Team Opzet</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>info@fractionalbi.nl</li>
              <li>+31 6 12345678</li>
              <li>Nederland</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Fractional BI Consultant. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
