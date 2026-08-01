"""Build the ChromaDB Soros Q&A index at image-build time.

Instantiating the retriever downloads the ONNX all-MiniLM-L6-v2 embedding model
and builds the persistent `chroma_db/` index so runtime cold starts are fast and
offline-safe. No Gemini API key is required for this step.
"""
from financials_api.rag_retriever import ChromaEmbeddingRetriever

if __name__ == "__main__":
    ChromaEmbeddingRetriever(persist_dir="chroma_db")
    print("chroma index prebuilt")
