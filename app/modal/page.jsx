"use client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  async function handleDeleteAll() {
    const respo = await fetch("/api/deleteall", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (respo.ok) {
      alert("All users deleted successfully.");
    } else {
      alert("Failed to delete users.");
    }

    closeModal();
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onPress={openModal}>
        Delete all Users
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={closeModal}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent className="rounded-xl p-8 shadow-lg bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl font-bold text-center mb-4">Delete All Data</ModalHeader>
              <ModalBody className="space-y-6 text-gray-700">
                <p className="text-center">
                  Are you sure you want to delete all users? This action cannot be undone.
                </p>
              </ModalBody>

              <ModalFooter className="flex justify-between">
                {/* Button to delete all data */}
                <Button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  color="danger"
                  onPress={handleDeleteAll}
                >
                  Delete All Data
                </Button>
                {/* Button to close the modal */}
                <Button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                  color="primary"
                  onPress={onClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
