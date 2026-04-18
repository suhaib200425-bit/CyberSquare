function CertificateCard() {
    return (
        <div className="col-12 col-md-6 p-2">
            <div className="card border-0 shadow-sm" style={{ maxWidth: "500px", borderRadius: "12px" }}>

                {/* Top Gradient */}
                <div
                    className="text-white text-center p-4"
                    style={{
                        background: "linear-gradient(90deg, #2b6cff, #6a5cff)",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px"
                    }}
                >
                    <i className="bi bi-award fs-2 mb-2"></i>
                    <h6 className="fw-semibold mb-0">Certificate of Completion</h6>
                </div>

                {/* Body */}
                <div className="card-body text-center">
                    <h6 className="fw-semibold">
                        UI/UX Design Masterclass with Figma
                    </h6>

                    <p className="text-muted mb-1">
                        Completed on 2024-05-20
                    </p>

                    <p className="text-muted">
                        Issued to John Doe
                    </p>

                    <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-download me-1"></i>
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CertificateCard;